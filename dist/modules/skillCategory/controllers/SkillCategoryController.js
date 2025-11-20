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
exports.SkillCategoryController = exports.skillCategoryService = void 0;
const sendResponse_1 = __importDefault(require("../../../shared/utils/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const SkillCategoryRepository_1 = require("../repositories/SkillCategoryRepository");
const SkillCategoryService_1 = require("../services/SkillCategoryService");
const skillCategoryRepo = new SkillCategoryRepository_1.SkillCategoryRepository();
exports.skillCategoryService = new SkillCategoryService_1.SkillCategoryService(skillCategoryRepo);
class SkillCategoryController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield exports.skillCategoryService.createSkillCategory(req.body);
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.CREATED,
                success: true,
                message: "Skill category created successfully",
                data: result,
            });
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield exports.skillCategoryService.getAllSkillCategories(req.query);
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "Skill categories retrieved successfully",
                data: result,
            });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield exports.skillCategoryService.getSkillCategoryById(id);
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "Skill category retrieved successfully",
                data: result,
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield exports.skillCategoryService.updateSkillCategory(id, req.body);
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "Skill category updated successfully",
                data: result,
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield exports.skillCategoryService.deleteSkillCategory(id);
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "Skill category deleted successfully",
                data: result,
            });
        });
    }
}
exports.SkillCategoryController = SkillCategoryController;
