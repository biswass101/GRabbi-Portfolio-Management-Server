import { Router } from "express";
import { validateDTO } from "../../../shared/utils/validateDTO";
import { CertificationController } from "../controllers/CertificationController";
import { CreateCertificationDTO } from "../dtos/CreateCertificationDTO";
import { UpdateCertificationDTO } from "../dtos/UpdateCertificationDTO";


const router = Router();
const certificationController = new CertificationController();

router.get("/", 
    certificationController.getAll.bind(certificationController)
);
router.get("/:id", 
    certificationController.getOne.bind(certificationController)
);
router.post("/", 
    validateDTO(CreateCertificationDTO), 
    certificationController.create.bind(certificationController)
);
router.patch("/:id", 
    validateDTO(UpdateCertificationDTO), 
    certificationController.update.bind(certificationController)
);
router.delete("/:id", 
    certificationController.delete.bind(certificationController)
)

export { router as certificationRoutes };
