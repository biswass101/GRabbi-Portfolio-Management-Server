import { NextFunction, Request, Response } from "express";
import { JwtService } from "../utils/jwt";
import ApiError from "../../shared/utils/apiError";
import httpStatus from "http-status";
import { config } from "../../config/env.config";
import { JwtPayload } from "jsonwebtoken";
import { userService } from "../../modules/user/controllers/UserController";

export class AuthGuard {
  private jwtService: JwtService;

  constructor(jwtService: JwtService) {
    this.jwtService = jwtService;
  }

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.headers.authorization;
      if (!token)
        throw new ApiError(
          httpStatus.UNAUTHORIZED,
          "Token Not Found. Unauthorized user!"
        );
      const decoded = this.jwtService.verify(
        token,
        config.jwt.secret
      ) as any;

      if (!decoded)
        throw new ApiError(
          httpStatus.UNAUTHORIZED,
          "Could not verify token. Unauthorized user"
        );
      const { sub, role } = decoded;

      const user = await userService.getUserById(sub as string);
      
      if (!user) throw new ApiError(httpStatus.NOT_FOUND, "User Not Found!");
      if (role !== 'admin')
        throw new ApiError(
          httpStatus.UNAUTHORIZED,
          "Role mismatched. Unauthorized!"
        );
      console.log(user);

      req.user = decoded as any;

      next();
    } catch (error: any) {
      throw new ApiError(
        httpStatus.UNAUTHORIZED,
        "Unauthorized or invalid token"
      );
    }
  }
}
