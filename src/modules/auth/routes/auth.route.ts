import { Router } from "express";
import { AuthController } from "../controllers/AuthController";
import { validateDTO } from "../../../shared/utils/validateDTO";
import { SigninUserDTO } from "../dtos/SigninUserDTO";
import { SignupUserDTO } from "../dtos/SignupUserDTO";
import { ChangeUserPasswordDTO } from "../dtos/ChangeUserPasswordDTO";
import { JwtService } from "../../../core/utils/jwt";
import { AuthGuard } from "../../../core/guards/AuthGuard";
import { config } from "../../../config/env.config";


const router = Router();
const authController = new AuthController();
const jwtService = new JwtService({secret: config.jwt.secret as string, expiresIn: config.jwt.expiresIn})
const authGuard = new AuthGuard(jwtService);

router.post('/signin', 
    validateDTO(SigninUserDTO),
    authController.signinUser.bind(authController)
);
router.post('/signup',
    validateDTO(SignupUserDTO), 
    authController.signupUser.bind(authController)
);

router.post('/change-password', 
    validateDTO(ChangeUserPasswordDTO),
    authGuard.handle.bind(authGuard),
    authController.changePassword.bind(authController)
)

router.patch('/forget-password', 
    authController.forgetPassword.bind(authController)
)

router.post('/reset-password',
    authController.resetPassword.bind(authController)
)

router.post('/logout',
    authController.logoutUser.bind(authController)
)

export { router as authRoutes}