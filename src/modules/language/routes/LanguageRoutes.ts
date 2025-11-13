import { Router } from "express";
import { validateDTO } from "../../../shared/utils/validateDTO";
import { LanguageController } from "../controllers/LanguageController";
import { CreateLanguageDTO } from "../dtos/CreateLanguageDTO";
import { UpdateLanguageDTO } from "../dtos/UpdateLanguageDTO";

const router = Router();
const languageController = new LanguageController();

router.get("/", 
  languageController.getAll.bind(languageController)
);

router.get("/:id", 
  languageController.getOne.bind(languageController)
);

router.post("/", 
  validateDTO(CreateLanguageDTO), 
  languageController.create.bind(languageController)
);

router.patch("/:id", 
  validateDTO(UpdateLanguageDTO), 
  languageController.update.bind(languageController)
);

router.delete("/:id", 
  languageController.delete.bind(languageController)
);

export { router as languageRoutes };
