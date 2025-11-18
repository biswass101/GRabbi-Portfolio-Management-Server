import { Request, Response } from "express";
import { UploadService } from "../services/UploadService";
import sendResponse from "../../../shared/utils/sendResponse";
import httpStatus from "http-status";

const uploadService = new UploadService();

export class UploadController {
  async uploadImage(req: Request, res: Response) {
    if (!req.file) {
      return sendResponse(res, {
        statusCode: httpStatus.BAD_REQUEST,
        success: false,
        message: "No file uploaded",
        data: null,
      });
    }

    const uploaded = await uploadService.uploadImage(req.file);

    return sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "File uploaded successfully",
      data: uploaded, // ONLY send {url, public_id}
    });
  }

  async deleteImage(req: Request, res: Response) {
    const result = await uploadService.deleteImage(req.body.public_id);

    return sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "File deleted successfully",
      data: result,
    });
  }
}
