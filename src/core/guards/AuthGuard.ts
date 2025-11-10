import { NextFunction, Request, Response } from "express";
import { JwtService } from "../utils/jwt";
import ApiError from "../../shared/utils/apiError";
import htttpStatus from 'http-status'

export class AuthGuard {
    private jwtService: JwtService;

    constructor(jwtService: JwtService) {
        this.jwtService = jwtService;
    }

    handle(req: Request, res: Response, next: NextFunction): void {
        try {
            const authHeader = req.headers.authorization;
            if(!authHeader || !authHeader.startsWith("Bearer ")) {
                throw new ApiError(htttpStatus.UNAUTHORIZED, "Unauthorized: Missing token");
            }

            const token = authHeader.split(" ")[1];
            const decoded = this.jwtService.verify(token);

            (req as any).user = decoded;
            next();
        } catch (error: any) {
            throw new ApiError(htttpStatus.UNAUTHORIZED, "Unauthorized or invalid token")
        }
    }
}