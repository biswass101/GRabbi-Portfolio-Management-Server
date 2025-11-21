import { Request, Response } from "express";
import { UserRepository } from "../../user/repositories/UserRepository";
import { HashService } from "../../../core/utils/hash.service";
import { UserController } from "../../user/controllers/UserController";
import { AuthService } from "../services/AuthService";
import { JwtService } from "../../../core/utils/jwt";
import { config } from "../../../config/env.config";
import sendResponse from "../../../shared/utils/sendResponse";
import httpStatus from "http-status";
import { AuthRepository } from "../repositories/AuthRepository";

const userRepo = new UserRepository();
const authRepo = new AuthRepository();
const hashService = new HashService();
const jwtService = new JwtService({
  secret: "jwt-secret-portf",
  expiresIn: "1d",
});
const authService = new AuthService(
  userRepo,
  authRepo,
  hashService,
  jwtService
);
const userController = new UserController();

export class AuthController {
  async signupUser(req: Request, res: Response) {
    await userController.create(req, res);
  }

  async signinUser(req: Request, res: Response) {
    const user = await authService.signinUser(req.body);
    const { accessToken, refreshToken, isUserExists } = user;
    const isProduction = config.app.env === "production";
    console.log("Env: ", isProduction);

    const tokenResult = await authService.createRefreshToken(
      isUserExists._id?.toString() as string,
      refreshToken,
      req
    );

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 1000 * 60 * 60 * 24 * 30,
      path: "/",
    });

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Loign Successfully",
      data: { accessToken, userId: isUserExists._id?.toString() as string },
    });
  }

  async changePassword(req: Request, res: Response) {
    const result = await authService.changePassword(req?.user as any, req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Password Changed Successfully",
      data: result,
    });
  }

  async refreshToken(req: Request, res: Response) {
    const result = await authService.refreshToken(req.cookies.refreshToken);
    const { newRefreshToken, newAccessToken, userId } = result;
    await authService.createRefreshToken(
      userId as string,
      newRefreshToken,
      req
    );
    console.log(config.app.env);
    res.cookie("refreshToken", newRefreshToken, {
      secure: true,
      httpOnly: true,
      sameSite: "none",
      maxAge: 1000 * 60 * 60 * 24 * 30,
      path: "/",
    });
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Token is refresed Successfully",
      data: { newAccessToken },
    });
  }

  async forgetPassword(req: Request, res: Response) {
    const result = await authService.forgetPassword(req.body.email);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Please Check your email",
      data: result,
    });
  }

  async resetPassword(req: Request, res: Response) {
    const token = req.headers.authorization as string;
    const result = await authService.resetPassword(req.body, token);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Password has been reset",
      data: result,
    });
  }

  async logoutUser(req: Request, res: Response) {
    const { refreshToken } = req.cookies;
    await authService.logoutUser(
      refreshToken,
      req.headers["user-agent"] as string
    );
    console.log(config.app.env);

    res.clearCookie("refreshToken", {
      secure: true,
      httpOnly: true,
      sameSite: "none",
      path: "/",
    });
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Logout Successfully",
      data: null,
    });
  }
}
