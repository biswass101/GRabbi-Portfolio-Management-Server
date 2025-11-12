import { Router } from "express";
import { validateDTO } from "../../../shared/utils/validateDTO";
import { CompetencieController } from "../controllers/CompetencieController";
import { CreateCompetencieDTO } from "../dtos/CreateCompetencieDTO";
import { UpdateCompetencieDTO } from "../dtos/UpdateCompetencieDTO";


const router = Router();
const competencieController = new CompetencieController();

router.get("/", 
    competencieController.getAll.bind(competencieController)
);
router.get("/:id", 
    competencieController.getOne.bind(competencieController)
);
router.post("/", 
    validateDTO(CreateCompetencieDTO), 
    competencieController.create.bind(competencieController)
);
router.patch("/:id", 
    validateDTO(UpdateCompetencieDTO), 
    competencieController.update.bind(competencieController)
);
router.delete("/:id", 
    competencieController.delete.bind(competencieController)
)

export { router as competencieRoutes };
