import { Request, Response } from "express";
import sendResponse from "../../../shared/utils/sendResponse";
import httpStatus from 'http-status';
import { CertificationService } from "../services/CertificationService";
import { CertificationRepository } from "../repositories/CertificationRepository";


const certificationRepo = new CertificationRepository();
export const certificationService = new CertificationService(certificationRepo);

export class CertificationController {
  async create(req: Request, res: Response) {
    const certification = await certificationService.createCertification(req.body);
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Certification created",
      data: certification
    })
  }

  async getAll(req: Request, res: Response) {
    const certifications = await certificationService.getAllCertifications();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Certifications retrieved",
      data: certifications
    })
  }

  async getOne(req: Request, res: Response) {
    const { id } = req.params;
    const certification = await certificationService.getCertificationById(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Certification retrieved",
      data: certification
    })
  }

  async update(req: Request, res: Response) {
    const certification = await certificationService.updateCertification(req.params.id, req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Certification updated",
      data: certification
    })
  }

  async delete(req: Request, res: Response) {
    const certification = await certificationService.deleteCertification(req.params.id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Certification deleted",
      data: certification
    })
  }
}
