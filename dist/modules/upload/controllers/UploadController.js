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
exports.UploadController = void 0;
const UploadService_1 = require("../services/UploadService");
const sendResponse_1 = __importDefault(require("../../../shared/utils/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const uploadService = new UploadService_1.UploadService();
class UploadController {
    uploadImage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.file) {
                return (0, sendResponse_1.default)(res, {
                    statusCode: http_status_1.default.BAD_REQUEST,
                    success: false,
                    message: "No file uploaded",
                    data: null,
                });
            }
            const uploaded = yield uploadService.uploadImage(req.file);
            return (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.CREATED,
                success: true,
                message: "File uploaded successfully",
                data: uploaded, // ONLY send {url, public_id}
            });
        });
    }
    deleteImage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield uploadService.deleteImage(req.body.public_id);
            return (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "File deleted successfully",
                data: result,
            });
        });
    }
}
exports.UploadController = UploadController;
