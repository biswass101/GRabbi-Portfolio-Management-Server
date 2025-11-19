import { Router } from "express";
import { DashboardController } from "../controllers/DashboardController";


const router = Router();
const dashboardController = new DashboardController();

router.get("/stats/:id", 
    dashboardController.getStats.bind(dashboardController)
);

export { router as dashboardRoutes };
