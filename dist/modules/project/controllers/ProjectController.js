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
exports.ProjectController = exports.projectService = void 0;
const sendResponse_1 = __importDefault(require("../../../shared/utils/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const ProjectRepository_1 = require("../repositories/ProjectRepository");
const ProjectService_1 = require("../services/ProjectService");
const projectRepo = new ProjectRepository_1.ProjectRepository();
exports.projectService = new ProjectService_1.ProjectService(projectRepo);
class ProjectController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const project = yield exports.projectService.createProject(req.body);
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.CREATED,
                success: true,
                message: "Project created",
                data: project,
            });
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const projects = yield exports.projectService.getAllProjects();
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "Projects retrieved",
                data: projects,
            });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const project = yield exports.projectService.getProjectById(id);
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "Project retrieved",
                data: project,
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const project = yield exports.projectService.updateProject(req.params.id, req.body);
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "Project updated",
                data: project,
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const project = yield exports.projectService.deleteProject(req.params.id);
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "Project deleted",
                data: project,
            });
        });
    }
}
exports.ProjectController = ProjectController;
