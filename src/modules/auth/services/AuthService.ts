import { Request } from "express";
import { config } from "../../../config/env.config";
import { HashService } from "../../../core/utils/hash.service";
import { JwtService } from "../../../core/utils/jwt";
import ApiError from "../../../shared/utils/apiError";
import { IUser } from "../../user/models/User.model";
import { UserRepository } from "../../user/repositories/UserRepository";
import { IAuth } from "../models/auth.model";
import httpStatus from "http-status";
import { AuthRepository } from "../repositories/AuthRepository";
import { JwtPayload } from "jsonwebtoken";
import { createEmailHtml } from "../../../html/ui/resetUi";
import sendEmail from "../../../shared/utils/sendEmail";

export class AuthService {
  constructor(
    private userRopo: UserRepository,
    private authRepo: AuthRepository,
    private hashService: HashService,
    private jwtService: JwtService
  ) {}

  async signupUser(user: IUser) {
    return await this.userRopo.create(user);
  }

  async signinUser(credentials: IAuth) {
    const isUserExists = await this.userRopo.findByEmail(credentials.email);
    if (!isUserExists)
      throw new ApiError(httpStatus.NOT_FOUND, "User not found");

    const isPasswordMatched = await this.hashService.compare(
      credentials.password,
      isUserExists.password
    );
    if (!isPasswordMatched)
      throw new ApiError(httpStatus.UNAUTHORIZED, "Passowrd did not matched!");

    const jwtPayload = {
      sub: isUserExists._id?.toString() as string,
      name: isUserExists.name,
      email: isUserExists.email,
      role: isUserExists.role,
    };

    const accessToken = this.jwtService.sign(jwtPayload, {
      secret: config.jwt.secret,
      expiresIn: config.jwt.expiresIn,
    });

    const refreshToken = this.jwtService.sign(jwtPayload, {
      secret: config.jwt.refreshSecret,
      expiresIn: config.jwt.refreshExpiresIn,
    });
    return {
      accessToken,
      refreshToken,
      isUserExists,
    };
  }

  async changePassword(
    userData: JwtPayload,
    payload: { oldPassword: string; newPassword: string }
  ) {
    const user = await this.userRopo.findById(userData.sub as string);
    if (!user) throw new ApiError(httpStatus.NOT_FOUND, "User Not Found!");

    const isPasswordMatched = await this.hashService.compare(
      payload.oldPassword,
      user.password
    );

    if (!isPasswordMatched)
      throw new ApiError(httpStatus.FORBIDDEN, "Passowrd did not matched!");

    const newHashPassword = await this.hashService.hash(payload.newPassword);

    const result = await this.userRopo.update(user._id?.toString() as string, {
      password: newHashPassword,
    });
    return result;
  }

  async refreshToken(oldToken: string) {
    if (!oldToken)
      throw new ApiError(
        httpStatus.UNAUTHORIZED,
        "Token not Found. Unauthorized User!"
      );

    const decoded = this.jwtService.verify(
      oldToken,
      config.jwt.refreshSecret as string
    ) as JwtPayload;
    if (!decoded)
      throw new ApiError(
        httpStatus.UNAUTHORIZED,
        "Couldn't verify the token. Unauthorized User!"
      );

    const { sub } = decoded;
      console.log(sub);
    const existingToken = await this.authRepo.getRefreshToken(
      decoded.sub as string
    );
    
    console.log(existingToken)
    if (!existingToken)
      throw new ApiError(httpStatus.UNAUTHORIZED, "Token expired or invalid!");

    const user = await this.userRopo.findById(sub as string);
    if (!user) throw new ApiError(httpStatus.NOT_FOUND, "User Not Found!");

    const jwtPayload = {
      sub: user._id?.toString() as string,
      name: user.name,
      email: user.email,
      role: user.role,
    };

    const newAccessToken = this.jwtService.sign(jwtPayload, {
      secret: config.jwt.secret,
      expiresIn: config.jwt.expiresIn,
    });
    const newRefreshToken = this.jwtService.sign(jwtPayload, {
      secret: config.jwt.refreshSecret,
      expiresIn: config.jwt.refreshExpiresIn,
    });
    return { newAccessToken, newRefreshToken, userId: sub };
  }

  async forgetPassword(email: string) {
    const user = await this.userRopo.findByEmail(email);
    if (!user) throw new ApiError(httpStatus.NOT_FOUND, "User Not Found!");

    const jwtPayload = {
      sub: user._id?.toString() as string,
      name: user.name,
      email: user.email,
      role: user.role,
    };

    const resetPassToken = this.jwtService.sign(jwtPayload, {
      secret: config.jwt.resetSecret as string,
      expiresIn: config.jwt.resetExpiresIN as string,
    });

    const resetUILink = `${config.clientSite.reset_pass_ui_link}?id=${user?._id}&token=${resetPassToken}`;
    const resetUI = createEmailHtml(user?.name, resetUILink);
    sendEmail(user?.email, "Reset your password", resetUI);
  }

  async resetPassword(
    payload: { id: string; newPassword: string },
    token: string
  ) {
    const user = await this.userRopo.findById(payload.id);
    if (!user) throw new ApiError(httpStatus.NOT_FOUND, "User Not Found!");

    const decoded = this.jwtService.verify(
      token,
      config.jwt.resetSecret as string
    ) as JwtPayload;
    if (payload.id !== decoded.sub)
    {
      throw new ApiError(httpStatus.FORBIDDEN, "Forbidden Access!");
    }
    const hashNewPassword = await this.hashService.hash(payload?.newPassword);
    await this.userRopo.update(decoded.sub, { password: hashNewPassword });
  }

  async logoutUser(token: string, userAgent: string) {
    console.log("Token: ", token);
    const decoded = this.jwtService.verify(
      token,
      config.jwt.refreshSecret as string
    ) as JwtPayload;
    if (!decoded) throw new ApiError(httpStatus.UNAUTHORIZED, "Invalid Token");


    const user = await this.userRopo.findById(decoded.sub as string);
    if (!user) throw new ApiError(httpStatus.NOT_FOUND, "User Not Found!");

    await this.deleteRefreshTokens(user._id as string, userAgent);

    return { message: "User logged out successfully" };
  }

  async createRefreshToken(userId: string, token: string, req: Request) {
    console.log("hello")
    const tokenHash = await this.hashService.hash(token);
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    const result1 = await this.deleteRefreshTokens(
      userId,
      req.headers["user-agent"] as string
    );
    console.log(userId);
    const result = await this.authRepo.createRefreshToken({
      userId,
      tokenHash,
      userAgent: req.headers["user-agent"],
      ipAddress: req.ip,
      expiresAt,
    });

    return result;
  }

  async deleteRefreshTokens(userId: string, userAgent: string) {
    return await this.authRepo.deleteRefreshTokens(userId, userAgent);
  }
}
