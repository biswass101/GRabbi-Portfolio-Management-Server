import { Request, Response } from "express";
import sendResponse from "../../../shared/utils/sendResponse";
import httpStatus from 'http-status';
import { CompetencieRepository } from "../repositories/CompetencieRepository";
import { CompetencieService } from "../services/CompetencieService";


const competencieRepo = new CompetencieRepository();
export const competencieService = new CompetencieService(competencieRepo);

export class CompetencieController {
  async create(req: Request, res: Response) {
    const competencie = await competencieService.createCompetencie(req.body);
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Competencie created",
      data: competencie
    })
  }

  async getAll(req: Request, res: Response) {
    const competencies = await competencieService.getAllCompetencies(req.query);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Competencies retrieved",
      data: competencies
    })
  }

  async getOne(req: Request, res: Response) {
    const { id } = req.params;
    const competencie = await competencieService.getCompetencieById(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Competencie retrieved",
      data: competencie
    })
  }

  async update(req: Request, res: Response) {
    const competencie = await competencieService.updateCompetencie(req.params.id, req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Competencie updated",
      data: competencie
    })
  }

  async delete(req: Request, res: Response) {
    const competencie = await competencieService.deleteCompetencie(req.params.id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Competencie deleted",
      data: competencie
    })
  }
}
