import { Request, Response } from "express";
import sendResponse from "../../../shared/utils/sendResponse";
import httpStatus from 'http-status';
import { EducationRepository } from "../repositories/EducationRepository";
import { EducationService } from "../services/EducationService";


const educationRepo = new EducationRepository();
export const educationService = new EducationService(educationRepo);

export class EducationController {
  async create(req: Request, res: Response) {
    const education = await educationService.createEducation(req.body);
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Education created",
      data: education
    })
  }

  async getAll(req: Request, res: Response) {
    const educations = await educationService.getAllEducations();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Educations retrieved",
      data: educations
    })
  }

  async getOne(req: Request, res: Response) {
    const { id } = req.params;
    const education = await educationService.getEducationById(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Education retrieved",
      data: education
    })
  }

  async update(req: Request, res: Response) {
    const education = await educationService.updateEducation(req.params.id, req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Education updated",
      data: education
    })
  }

  async delete(req: Request, res: Response) {
    const education = await educationService.deleteEducation(req.params.id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Education deleted",
      data: education
    })
  }
}
