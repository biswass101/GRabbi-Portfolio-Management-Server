import { Router } from "express";
import { UploadController } from "../controllers/UploadController";
import { upload } from "../../../shared/middlewares/multer";

const router = Router();
const uploadController = new UploadController();

router.post(
  "/upload",
  upload.single("image"),
  uploadController.uploadImage.bind(uploadController)
);

router.delete("/delete", uploadController.deleteImage.bind(uploadController));

export { router as fileRoutes };
