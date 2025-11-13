import { Router } from "express";
import { validateDTO } from "../../../shared/utils/validateDTO";
import { InterestController } from "../controllers/InterestController";
import { CreateInterestDTO } from "../dtos/CreateInterestDTO";
import { UpdateInterestDTO } from "../dtos/UpdateInterestDTO";

const router = Router();
const interestController = new InterestController();

router.get("/", 
  interestController.getAll.bind(interestController)
);

router.get("/:id", 
  interestController.getOne.bind(interestController)
);

router.post("/", 
  validateDTO(CreateInterestDTO), 
  interestController.create.bind(interestController)
);

router.patch("/:id", 
  validateDTO(UpdateInterestDTO), 
  interestController.update.bind(interestController)
);

router.delete("/:id", 
  interestController.delete.bind(interestController)
);

export { router as interestRoutes };
