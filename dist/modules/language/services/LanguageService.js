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
exports.LanguageService = void 0;
class LanguageService {
    constructor(languageRepo) {
        this.languageRepo = languageRepo;
    }
    createLanguage(language) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.languageRepo.create(language);
        });
    }
    getAllLanguages() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.languageRepo.findAll();
        });
    }
    getLanguageById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.languageRepo.findById(id);
        });
    }
    updateLanguage(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.languageRepo.update(id, data);
        });
    }
    deleteLanguage(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.languageRepo.delete(id);
        });
    }
}
exports.LanguageService = LanguageService;
