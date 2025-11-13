import { Router } from "express";
import { validateDTO } from "../../../shared/utils/validateDTO";
import { ProjectController } from "../controllers/ProjectController";
import { CreateProjectDTO } from "../dtos/CreateProjectDTO";
import { UpdateProjectDTO } from "../dtos/UpdateProjectDTO";

const router = Router();
const projectController = new ProjectController();

router.get("/", 
  projectController.getAll.bind(projectController)
);

router.get("/:id", 
  projectController.getOne.bind(projectController)
);

router.post("/", 
  validateDTO(CreateProjectDTO), 
  projectController.create.bind(projectController)
);

router.patch("/:id", 
  validateDTO(UpdateProjectDTO), 
  projectController.update.bind(projectController)
);

router.delete("/:id", 
  projectController.delete.bind(projectController)
);

export { router as projectRoutes };
