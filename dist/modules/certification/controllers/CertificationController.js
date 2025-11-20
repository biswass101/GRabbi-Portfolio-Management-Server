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
exports.CertificationController = exports.certificationService = void 0;
const sendResponse_1 = __importDefault(require("../../../shared/utils/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const CertificationService_1 = require("../services/CertificationService");
const CertificationRepository_1 = require("../repositories/CertificationRepository");
const certificationRepo = new CertificationRepository_1.CertificationRepository();
exports.certificationService = new CertificationService_1.CertificationService(certificationRepo);
class CertificationController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const certification = yield exports.certificationService.createCertification(req.body);
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.CREATED,
                success: true,
                message: "Certification created",
                data: certification
            });
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const certifications = yield exports.certificationService.getAllCertifications(req.query);
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "Certifications retrieved",
                data: certifications
            });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const certification = yield exports.certificationService.getCertificationById(id);
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "Certification retrieved",
                data: certification
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const certification = yield exports.certificationService.updateCertification(req.params.id, req.body);
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "Certification updated",
                data: certification
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const certification = yield exports.certificationService.deleteCertification(req.params.id);
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "Certification deleted",
                data: certification
            });
        });
    }
}
exports.CertificationController = CertificationController;
