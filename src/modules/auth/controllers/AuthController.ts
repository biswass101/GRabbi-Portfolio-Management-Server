import { Request, Response } from "express";
import { UserRepository } from "../../user/repositories/UserRepository";
import { HashService } from "../../../core/utils/hash.service";
import { UserService } from "../../user/services/UserService";
import { UserController } from "../../user/controllers/UserController";
import { AuthService } from "../services/AuthService";
import { JwtService } from "../../../core/utils/jwt";
import { config } from "../../../config/env.config";
import sendResponse from "../../../shared/utils/sendResponse";
import httpStatus from 'http-status'
import { AuthRepository } from "../repositories/AuthRepository";

const userRepo = new UserRepository();
const authRepo = new AuthRepository();
const hashService = new HashService();
const jwtService = new JwtService({
  secret: "jwt-secret-portf",
  expiresIn: "1d",
});
const authService = new AuthService(userRepo, authRepo, hashService, jwtService);
const userController = new UserController();

export class AuthController {
  async signupUser(req: Request, res: Response) {
    await userController.create(req, res);
  }

  async signinUser(req: Request, res: Response) {
    const user = await authService.signinUser(req.body);
    const { accessToken, refreshToken, isUserExists } = user;
    const isProduction = config.app.env === "production";

    const tokenResult = await authService.createRefreshToken(
        isUserExists._id?.toString() as string, 
        refreshToken, req
    );

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "none" : "lax",
      maxAge: 1000 * 60 * 60 * 24 * 30,
    });

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Loign Successfully",
      data: { accessToken, isUserExists, tokenResult},
    });
  }
}
