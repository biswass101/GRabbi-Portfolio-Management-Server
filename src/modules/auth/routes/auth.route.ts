import { Router } from "express";
import { AuthController } from "../controllers/AuthController";
import { validateDTO } from "../../../shared/utils/validateDTO";
import { SigninUserDTO } from "../dtos/SigninUserDTO";
import { SignupUserDTO } from "../dtos/SignupUserDTO";


const router = Router();
const authController = new AuthController();

router.post('/signin', 
    validateDTO(SigninUserDTO),
    authController.signinUser.bind(authController)
);
router.post('/signup',
    validateDTO(SignupUserDTO), 
    authController.signupUser.bind(authController)
);

export { router as authRoutes}