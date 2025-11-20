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
exports.SkillCategoryRepository = void 0;
const SkillCategory_model_1 = require("../models/SkillCategory.model");
class SkillCategoryRepository {
    create(skillCategory) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield SkillCategory_model_1.SkillCategoryModel.create(skillCategory);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield SkillCategory_model_1.SkillCategoryModel.find();
        });
    }
    findAllByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield SkillCategory_model_1.SkillCategoryModel.find({ userId });
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield SkillCategory_model_1.SkillCategoryModel.findById(id);
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield SkillCategory_model_1.SkillCategoryModel.findByIdAndUpdate(id, data, { new: true });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield SkillCategory_model_1.SkillCategoryModel.findByIdAndDelete(id);
        });
    }
}
exports.SkillCategoryRepository = SkillCategoryRepository;
