import { Request, Response } from "express";
import sendResponse from "../../../shared/utils/sendResponse";
import httpStatus from "http-status";
import { SoftSkillRepository } from "../repositories/SoftSkillRepository";
import { SoftSkillService } from "../services/SoftSkillService";

const softSkillRepo = new SoftSkillRepository();
export const softSkillService = new SoftSkillService(softSkillRepo);

export class SoftSkillController {
  async create(req: Request, res: Response) {
    const result = await softSkillService.createSoftSkill(req.body);
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Soft skill created successfully",
      data: result,
    });
  }

  async getAll(req: Request, res: Response) {
    const result = await softSkillService.getAllSoftSkills(req.query);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Soft skills retrieved successfully",
      data: result,
    });
  }

  async getOne(req: Request, res: Response) {
    const { id } = req.params;
    const result = await softSkillService.getSoftSkillById(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Soft skill retrieved successfully",
      data: result,
    });
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const result = await softSkillService.updateSoftSkill(id, req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Soft skill updated successfully",
      data: result,
    });
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const result = await softSkillService.deleteSoftSkill(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Soft skill deleted successfully",
      data: result,
    });
  }
}
