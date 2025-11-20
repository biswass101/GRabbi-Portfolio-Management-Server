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
exports.LanguageRepository = void 0;
const Language_model_1 = require("../models/Language.model");
class LanguageRepository {
    create(language) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Language_model_1.LanguageModel.create(language);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Language_model_1.LanguageModel.find();
        });
    }
    findAllByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Language_model_1.LanguageModel.find({ userId });
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Language_model_1.LanguageModel.findById(id);
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Language_model_1.LanguageModel.findByIdAndUpdate(id, data, { new: true });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield Language_model_1.LanguageModel.findByIdAndDelete(id);
            return result;
        });
    }
}
exports.LanguageRepository = LanguageRepository;
