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
exports.EducationRepository = void 0;
const Education_model_1 = require("../models/Education.model");
class EducationRepository {
    create(education) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Education_model_1.EducationModel.create(education);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Education_model_1.EducationModel.find();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Education_model_1.EducationModel.findById(id);
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Education_model_1.EducationModel.findByIdAndUpdate(id, data, { new: true });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield Education_model_1.EducationModel.findByIdAndDelete(id);
            return result;
        });
    }
}
exports.EducationRepository = EducationRepository;
