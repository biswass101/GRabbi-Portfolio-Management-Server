import { Request, Response } from "express";
import sendResponse from "../../../shared/utils/sendResponse";
import httpStatus from "http-status";
import { ExperienceRepository } from "../repositories/ExperienceRepository";
import { ExperienceService } from "../services/ExperienceService";

const experienceRepo = new ExperienceRepository();
export const experienceService = new ExperienceService(experienceRepo);

export class ExperienceController {
  async create(req: Request, res: Response) {
    const experience = await experienceService.createExperience(req.body);
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Experience created",
      data: experience,
    });
  }

  async getAll(req: Request, res: Response) {
    const experiences = await experienceService.getAllExperiences(req.query);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Experiences retrieved",
      data: experiences,
    });
  }

  async getOne(req: Request, res: Response) {
    const { id } = req.params;
    const experience = await experienceService.getExperienceById(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Experience retrieved",
      data: experience,
    });
  }

  async update(req: Request, res: Response) {
    const experience = await experienceService.updateExperience(req.params.id, req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Experience updated",
      data: experience,
    });
  }

  async delete(req: Request, res: Response) {
    const experience = await experienceService.deleteExperience(req.params.id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Experience deleted",
      data: experience,
    });
  }
}
