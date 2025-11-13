import { Router } from "express";
import { validateDTO } from "../../../shared/utils/validateDTO";
import { EducationController } from "../controllers/EducationController";
import { CreateEducationtDTO } from "../dtos/createEducationDTO";
import { UpdateEducationDTO } from "../dtos/updateEducationDTO";


const router = Router();
const educationController = new EducationController();

router.get("/", 
    educationController.getAll.bind(educationController)
);
router.get("/:id", 
    educationController.getOne.bind(educationController)
);
router.post("/", 
    validateDTO(CreateEducationtDTO), 
    educationController.create.bind(educationController)
);
router.patch("/:id", 
    validateDTO(UpdateEducationDTO), 
    educationController.update.bind(educationController)
);
router.delete("/:id", 
    educationController.delete.bind(educationController)
)

export { router as educationRoutes };
