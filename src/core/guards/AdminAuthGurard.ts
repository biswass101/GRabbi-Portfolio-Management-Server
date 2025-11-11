// import ApiError from "../../shared/utils/apiError";
// import { AuthGuard } from "./AuthGuard";
// import { Request, Response, NextFunction } from "express";
// import httpStatus from 'http-status'

// export class AdminAuthGuard extends AuthGuard {
//   handle(req: Request, res: Response, next: NextFunction): void {
//     console.log("Hello")
//     super.handle(req, res, () => {
//       if ((req as any).user.role !== "admin") {
//         throw new  ApiError(httpStatus.UNAUTHORIZED,"Forbidden: Admin only" );
//       }
//       next();
//     });
//   }
// }
