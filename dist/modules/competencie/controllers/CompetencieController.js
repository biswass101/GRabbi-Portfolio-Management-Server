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
exports.CompetencieController = exports.competencieService = void 0;
const sendResponse_1 = __importDefault(require("../../../shared/utils/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const CompetencieRepository_1 = require("../repositories/CompetencieRepository");
const CompetencieService_1 = require("../services/CompetencieService");
const competencieRepo = new CompetencieRepository_1.CompetencieRepository();
exports.competencieService = new CompetencieService_1.CompetencieService(competencieRepo);
class CompetencieController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const competencie = yield exports.competencieService.createCompetencie(req.body);
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.CREATED,
                success: true,
                message: "Competencie created",
                data: competencie
            });
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const competencies = yield exports.competencieService.getAllCompetencies();
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "Competencies retrieved",
                data: competencies
            });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const competencie = yield exports.competencieService.getCompetencieById(id);
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "Competencie retrieved",
                data: competencie
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const competencie = yield exports.competencieService.updateCompetencie(req.params.id, req.body);
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "Competencie updated",
                data: competencie
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const competencie = yield exports.competencieService.deleteCompetencie(req.params.id);
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "Competencie deleted",
                data: competencie
            });
        });
    }
}
exports.CompetencieController = CompetencieController;
