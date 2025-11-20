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
exports.SkillCategoryService = void 0;
class SkillCategoryService {
    constructor(skillCategoryRepo) {
        this.skillCategoryRepo = skillCategoryRepo;
    }
    createSkillCategory(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.skillCategoryRepo.create(data);
        });
    }
    getAllSkillCategories(query) {
        return __awaiter(this, void 0, void 0, function* () {
            if (query.userId)
                return yield this.skillCategoryRepo.findAllByUserId(query.userId);
            return yield this.skillCategoryRepo.findAll();
        });
    }
    getSkillCategoryById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.skillCategoryRepo.findById(id);
        });
    }
    updateSkillCategory(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.skillCategoryRepo.update(id, data);
        });
    }
    deleteSkillCategory(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.skillCategoryRepo.delete(id);
        });
    }
}
exports.SkillCategoryService = SkillCategoryService;
