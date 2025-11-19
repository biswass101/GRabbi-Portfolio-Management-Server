import { Request, Response } from "express";
import sendResponse from "../../../shared/utils/sendResponse";
import httpStatus from "http-status";
import { DashboardService } from "../services/DashboardService";

export const dashboardService = new DashboardService();

export class DashboardController {
  async getStats(req: Request, res: Response) {
    const dashboard = await dashboardService.getStats(req.params.id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Stats retrived",
      data: dashboard,
    });
  }
}
