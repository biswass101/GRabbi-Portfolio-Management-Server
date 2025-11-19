"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDTO = validateDTO;
// src/shared/utils/validateDTO.ts
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const http_status_1 = __importDefault(require("http-status"));
const sendResponse_1 = __importDefault(require("./sendResponse"));
function validateDTO(dtoClass) {
    return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
        const dtoObject = (0, class_transformer_1.plainToInstance)(dtoClass, req.body);
        const errors = yield (0, class_validator_1.validate)(dtoObject, {
            whitelist: true,
            forbidNonWhitelisted: true,
            skipMissingProperties: false,
        });
        if (errors.length > 0) {
            return (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.BAD_REQUEST,
                success: false,
                message: "Validation failed",
                data: errors.map((err) => Object.values(err.constraints)).flat(),
            });
        }
        next();
    });
}
