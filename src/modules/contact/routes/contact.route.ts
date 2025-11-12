import { Router } from "express";
import { validateDTO } from "../../../shared/utils/validateDTO";
import { ContactController } from "../controllers/ContactController";
import { CreateContactDTO } from "../dtos/CreateContactDTO";
import { UpdateContactDTO } from "../dtos/UpdateContactDTO";


const router = Router();
const contactController = new ContactController();

router.get("/", 
    contactController.getAll.bind(contactController)
);
router.get("/:id", 
    contactController.getOne.bind(contactController)
);
router.post("/", 
    validateDTO(CreateContactDTO), 
    contactController.create.bind(contactController)
);
router.patch("/:id", 
    validateDTO(UpdateContactDTO), 
    contactController.update.bind(contactController)
);
router.delete("/:id", 
    contactController.delete.bind(contactController)
)

export { router as contactRoutes };
