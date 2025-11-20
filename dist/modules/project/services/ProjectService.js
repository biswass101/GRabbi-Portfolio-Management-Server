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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectService = void 0;
class ProjectService {
    constructor(projectRepo) {
        this.projectRepo = projectRepo;
    }
    createProject(project) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.projectRepo.create(project);
        });
    }
    getAllProjects(query) {
        return __awaiter(this, void 0, void 0, function* () {
            if (query.userId)
                return yield this.projectRepo.findAllByUserId(query.userId);
            return yield this.projectRepo.findAll();
        });
    }
    getProjectById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.projectRepo.findById(id);
        });
    }
    updateProject(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.projectRepo.update(id, data);
        });
    }
    deleteProject(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.projectRepo.delete(id);
        });
    }
}
exports.ProjectService = ProjectService;
