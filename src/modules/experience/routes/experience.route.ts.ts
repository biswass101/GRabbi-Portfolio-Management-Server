import { Router } from "express";
import { validateDTO } from "../../../shared/utils/validateDTO";
import { ExperienceController } from "../controllers/ExperienceController";
import { CreateExperienceDTO } from "../dtos/CreateExperienceDTO";
import { UpdateExperienceDTO } from "../dtos/UpdateExperienceDTO";

const router = Router();
const experienceController = new ExperienceController();

router.get("/", 
  experienceController.getAll.bind(experienceController)
);

router.get("/:id", 
  experienceController.getOne.bind(experienceController)
);

router.post("/", 
  validateDTO(CreateExperienceDTO), 
  experienceController.create.bind(experienceController)
);

router.patch("/:id", 
  validateDTO(UpdateExperienceDTO), 
  experienceController.update.bind(experienceController)
);

router.delete("/:id", 
  experienceController.delete.bind(experienceController)
);

export { router as experienceRoutes };
