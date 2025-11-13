import { Request, Response } from "express";
import sendResponse from "../../../shared/utils/sendResponse";
import httpStatus from "http-status";
import { InterestRepository } from "../repositories/InterestRepository";
import { InterestService } from "../services/InterestService";

const interestRepo = new InterestRepository();
export const interestService = new InterestService(interestRepo);

export class InterestController {
  async create(req: Request, res: Response) {
    const interest = await interestService.createInterest(req.body);
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Interest created",
      data: interest,
    });
  }

  async getAll(req: Request, res: Response) {
    const interests = await interestService.getAllInterests();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Interests retrieved",
      data: interests,
    });
  }

  async getOne(req: Request, res: Response) {
    const { id } = req.params;
    const interest = await interestService.getInterestById(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Interest retrieved",
      data: interest,
    });
  }

  async update(req: Request, res: Response) {
    const interest = await interestService.updateInterest(req.params.id, req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Interest updated",
      data: interest,
    });
  }

  async delete(req: Request, res: Response) {
    const interest = await interestService.deleteInterest(req.params.id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Interest deleted",
      data: interest,
    });
  }
}
