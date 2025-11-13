import { Router } from "express";
import { SkillCategoryController } from "../controllers/SkillCategoryController";
import { validateDTO } from "../../../shared/utils/validateDTO";
import { CreateSkillCategoryDTO } from "../dtos/CreateSkillCategoryDTO";
import { UpdateSkillCategoryDTO } from "../dtos/UpdateSkillCategoryDTO";

const router = Router();
const skillCategoryController = new SkillCategoryController();

router.get("/", skillCategoryController.getAll.bind(skillCategoryController));
router.get("/:id", skillCategoryController.getOne.bind(skillCategoryController));

router.post(
  "/",
  validateDTO(CreateSkillCategoryDTO),
  skillCategoryController.create.bind(skillCategoryController)
);

router.patch(
  "/:id",
  validateDTO(UpdateSkillCategoryDTO),
  skillCategoryController.update.bind(skillCategoryController)
);

router.delete("/:id", skillCategoryController.delete.bind(skillCategoryController));

export { router as skillCategoryRoutes };
