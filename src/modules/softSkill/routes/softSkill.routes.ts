import { Router } from "express";
import { SoftSkillController } from "../controllers/SoftSkillController";
import { validateDTO } from "../../../shared/utils/validateDTO";
import { CreateSoftSkillDTO } from "../dtos/CreateSoftSkillDTO";
import { UpdateSoftSkillDTO } from "../dtos/UpdateSoftSkillDTO";

const router = Router();
const softSkillController = new SoftSkillController();

router.get("/", softSkillController.getAll.bind(softSkillController));
router.get("/:id", softSkillController.getOne.bind(softSkillController));

router.post(
  "/",
  validateDTO(CreateSoftSkillDTO),
  softSkillController.create.bind(softSkillController)
);

router.patch(
  "/:id",
  validateDTO(UpdateSoftSkillDTO),
  softSkillController.update.bind(softSkillController)
);

router.delete("/:id", softSkillController.delete.bind(softSkillController));

export { router as softSkillRoutes };
