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
exports.ExperienceService = void 0;
class ExperienceService {
    constructor(experienceRepo) {
        this.experienceRepo = experienceRepo;
    }
    createExperience(experience) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.experienceRepo.create(experience);
        });
    }
    getAllExperiences() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.experienceRepo.findAll();
        });
    }
    getExperienceById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.experienceRepo.findById(id);
        });
    }
    updateExperience(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.experienceRepo.update(id, data);
        });
    }
    deleteExperience(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.experienceRepo.delete(id);
        });
    }
}
exports.ExperienceService = ExperienceService;
