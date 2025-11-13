import { Request, Response } from "express";
import sendResponse from "../../../shared/utils/sendResponse";
import httpStatus from "http-status";
import { LanguageRepository } from "../repositories/LanguageRepository";
import { LanguageService } from "../services/LanguageService";

const languageRepo = new LanguageRepository();
export const languageService = new LanguageService(languageRepo);

export class LanguageController {
  async create(req: Request, res: Response) {
    const language = await languageService.createLanguage(req.body);
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Language created",
      data: language,
    });
  }

  async getAll(req: Request, res: Response) {
    const languages = await languageService.getAllLanguages();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Languages retrieved",
      data: languages,
    });
  }

  async getOne(req: Request, res: Response) {
    const { id } = req.params;
    const language = await languageService.getLanguageById(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Language retrieved",
      data: language,
    });
  }

  async update(req: Request, res: Response) {
    const language = await languageService.updateLanguage(req.params.id, req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Language updated",
      data: language,
    });
  }

  async delete(req: Request, res: Response) {
    const language = await languageService.deleteLanguage(req.params.id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Language deleted",
      data: language,
    });
  }
}
