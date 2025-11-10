import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { validateDTO } from "../../../shared/utils/validateDTO";
import { CreateUserDTO } from "../dtos/CreateUserDTO";
import { UpdateUserDTO } from "../dtos/UpdateUserDTO";


const router = Router();
const userController = new UserController();


router.get("/", userController.getAll.bind(userController));
router.get("/:id", userController.getOne.bind(userController));
router.post("/", validateDTO(CreateUserDTO), userController.create.bind(userController));
router.patch("/:id", validateDTO(UpdateUserDTO), userController.update.bind(userController));
router.delete("/:id", userController.delete.bind(userController))

export { router as userRoutes };
