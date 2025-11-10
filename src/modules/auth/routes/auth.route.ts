import { Router } from "express";
import { AuthController } from "../controllers/AuthController";
import { validateDTO } from "../../../shared/utils/validateDTO";
import { SigninUserDTO } from "../dtos/SigninUserDTO";
import { SignupUserDTO } from "../dtos/SignupUserDTO";
import { ChangeUserPasswordDTO } from "../dtos/ChangeUserPasswordDTO";
import { AdminAuthGuard } from "../../../core/guards/AdminAuthGurard";
import { JwtService } from "../../../core/utils/jwt";


const router = Router();
const authController = new AuthController();
const jwtService = new JwtService({secret: "defaut-secret-123", expiresIn: '1d'})
const adminAuthGuard = new AdminAuthGuard(jwtService);

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
    adminAuthGuard.handle,
    authController.changePassword.bind(authController)
)

export { router as authRoutes}