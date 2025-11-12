import { Router } from "express";
import { validateDTO } from "../../../shared/utils/validateDTO";
import { CertificationController } from "../controllers/CertificationController";
import { CreateCertificationDTO } from "../dtos/CreateCertificationDTO";
import { UpdateCertificationDTO } from "../dtos/UpdateCertificationDTO";


const router = Router();
const certificaionController = new CertificationController();

router.get("/", 
    certificaionController.getAll.bind(certificaionController)
);
router.get("/:id", 
    certificaionController.getOne.bind(certificaionController)
);
router.post("/", 
    validateDTO(CreateCertificationDTO), 
    certificaionController.create.bind(certificaionController)
);
router.patch("/:id", 
    validateDTO(UpdateCertificationDTO), 
    certificaionController.update.bind(certificaionController)
);
router.delete("/:id", 
    certificaionController.delete.bind(certificaionController)
)

export { router as certificationRoutes };
