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


  async changePassword (
    userData: JwtPayload, 
    payload: { oldPassword: string, newPassword: string}) 
  {
    const user = await this.userRopo.findById(userData.userId)
  if (!user) throw new ApiError(httpStatus.NOT_FOUND, "User Not Found!");

  const isPasswordMatched = await this.hashService.compare(
    payload.oldPassword,
    user.password
  );

  if (!isPasswordMatched)
    throw new ApiError(httpStatus.FORBIDDEN, "Passowrd did not matched!");

  const newHashPassword = await this.hashService.hash(payload.newPassword);

  const result = await this.userRopo.update(
    user._id?.toString() as string,
    {password: newHashPassword}    
  );
  return result;
  }

  async createRefreshToken(userId: string, token: string, req: Request) {
    const tokenHash = await this.hashService.hash(token);
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    const result1 = await this.deleteRefreshTokens(userId, req.headers["user-agent"] as string)
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
