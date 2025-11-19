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
exports.LanguageController = exports.languageService = void 0;
const sendResponse_1 = __importDefault(require("../../../shared/utils/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const LanguageRepository_1 = require("../repositories/LanguageRepository");
const LanguageService_1 = require("../services/LanguageService");
const languageRepo = new LanguageRepository_1.LanguageRepository();
exports.languageService = new LanguageService_1.LanguageService(languageRepo);
class LanguageController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const language = yield exports.languageService.createLanguage(req.body);
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.CREATED,
                success: true,
                message: "Language created",
                data: language,
            });
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const languages = yield exports.languageService.getAllLanguages();
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "Languages retrieved",
                data: languages,
            });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const language = yield exports.languageService.getLanguageById(id);
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "Language retrieved",
                data: language,
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const language = yield exports.languageService.updateLanguage(req.params.id, req.body);
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "Language updated",
                data: language,
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const language = yield exports.languageService.deleteLanguage(req.params.id);
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "Language deleted",
                data: language,
            });
        });
    }
}
exports.LanguageController = LanguageController;
