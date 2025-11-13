import { Request, Response } from "express";
import sendResponse from "../../../shared/utils/sendResponse";
import httpStatus from "http-status";
import { SkillCategoryRepository } from "../repositories/SkillCategoryRepository";
import { SkillCategoryService } from "../services/SkillCategoryService";

const skillCategoryRepo = new SkillCategoryRepository();
export const skillCategoryService = new SkillCategoryService(skillCategoryRepo);

export class SkillCategoryController {
  async create(req: Request, res: Response) {
    const result = await skillCategoryService.createSkillCategory(req.body);
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Skill category created successfully",
      data: result,
    });
  }

  async getAll(req: Request, res: Response) {
    const result = await skillCategoryService.getAllSkillCategories();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Skill categories retrieved successfully",
      data: result,
    });
  }

  async getOne(req: Request, res: Response) {
    const { id } = req.params;
    const result = await skillCategoryService.getSkillCategoryById(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Skill category retrieved successfully",
      data: result,
    });
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const result = await skillCategoryService.updateSkillCategory(id, req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Skill category updated successfully",
      data: result,
    });
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const result = await skillCategoryService.deleteSkillCategory(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Skill category deleted successfully",
      data: result,
    });
  }
}
