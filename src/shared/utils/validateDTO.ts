// src/shared/utils/validateDTO.ts
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { Request, Response, NextFunction } from "express";
import httpStatus from 'http-status'
import sendResponse from "./sendResponse";

export function validateDTO(dtoClass: new (...args: any[]) => object) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const dtoObject = plainToInstance(dtoClass, req.body);

    const errors = await validate(dtoObject, {
      whitelist: true,
      forbidNonWhitelisted: true,
      skipMissingProperties: false,
    });

    if (errors.length > 0) {
      return sendResponse(res, {
        statusCode: httpStatus.BAD_REQUEST,
        success: false,
        message: "Validation failed",
        data: errors.map((err: any) => Object.values(err.constraints)).flat(),
      });
    }

    next();
  };
}
