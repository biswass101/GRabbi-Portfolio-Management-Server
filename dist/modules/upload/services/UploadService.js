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
exports.UploadService = void 0;
const cloudinary_config_1 = __importDefault(require("../../../config/cloudinary.config"));
const apiError_1 = __importDefault(require("../../../shared/utils/apiError"));
const http_status_1 = __importDefault(require("http-status"));
const streamifier_1 = __importDefault(require("streamifier"));
class UploadService {
    uploadImage(file) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                if (!file) {
                    return reject(new apiError_1.default(http_status_1.default.BAD_REQUEST, "No file uploaded"));
                }
                const uploadStream = cloudinary_config_1.default.uploader.upload_stream({
                    folder: "uploads",
                    resource_type: "image",
                    transformation: [
                        { width: 800, height: 800, crop: "limit" },
                        { quality: "auto" },
                        { fetch_format: "auto" },
                    ],
                }, (error, result) => {
                    if (error) {
                        return reject(new apiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Upload failed"));
                    }
                    resolve({
                        url: result === null || result === void 0 ? void 0 : result.secure_url,
                        public_id: result === null || result === void 0 ? void 0 : result.public_id,
                    });
                });
                streamifier_1.default.createReadStream(file.buffer).pipe(uploadStream);
            });
        });
    }
    deleteImage(public_id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!public_id) {
                throw new apiError_1.default(http_status_1.default.BAD_REQUEST, "public_id is required");
            }
            try {
                const result = yield cloudinary_config_1.default.uploader.destroy(public_id);
                return result;
            }
            catch (err) {
                throw new apiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "File not Deleted");
            }
        });
    }
}
exports.UploadService = UploadService;
