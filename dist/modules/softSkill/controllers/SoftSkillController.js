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
exports.SoftSkillController = exports.softSkillService = void 0;
const sendResponse_1 = __importDefault(require("../../../shared/utils/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const SoftSkillRepository_1 = require("../repositories/SoftSkillRepository");
const SoftSkillService_1 = require("../services/SoftSkillService");
const softSkillRepo = new SoftSkillRepository_1.SoftSkillRepository();
exports.softSkillService = new SoftSkillService_1.SoftSkillService(softSkillRepo);
class SoftSkillController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield exports.softSkillService.createSoftSkill(req.body);
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.CREATED,
                success: true,
                message: "Soft skill created successfully",
                data: result,
            });
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield exports.softSkillService.getAllSoftSkills();
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "Soft skills retrieved successfully",
                data: result,
            });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield exports.softSkillService.getSoftSkillById(id);
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "Soft skill retrieved successfully",
                data: result,
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield exports.softSkillService.updateSoftSkill(id, req.body);
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "Soft skill updated successfully",
                data: result,
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield exports.softSkillService.deleteSoftSkill(id);
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "Soft skill deleted successfully",
                data: result,
            });
        });
    }
}
exports.SoftSkillController = SoftSkillController;
