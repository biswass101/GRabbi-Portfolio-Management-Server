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
exports.SoftSkillRepository = void 0;
const SoftSkill_model_1 = require("../models/SoftSkill.model");
class SoftSkillRepository {
    create(softSkill) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield SoftSkill_model_1.SoftSkillModel.create(softSkill);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield SoftSkill_model_1.SoftSkillModel.find();
        });
    }
    findAllByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield SoftSkill_model_1.SoftSkillModel.find({ userId });
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield SoftSkill_model_1.SoftSkillModel.findById(id);
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield SoftSkill_model_1.SoftSkillModel.findByIdAndUpdate(id, data, { new: true });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield SoftSkill_model_1.SoftSkillModel.findByIdAndDelete(id);
        });
    }
}
exports.SoftSkillRepository = SoftSkillRepository;
