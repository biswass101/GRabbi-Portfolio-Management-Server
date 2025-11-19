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
exports.CompetencieService = void 0;
class CompetencieService {
    constructor(competencieRepo) {
        this.competencieRepo = competencieRepo;
    }
    createCompetencie(competencie) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.competencieRepo.create(competencie);
        });
    }
    getAllCompetencies() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.competencieRepo.findAll();
        });
    }
    getCompetencieById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.competencieRepo.findById(id);
        });
    }
    updateCompetencie(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.competencieRepo.update(id, data);
        });
    }
    deleteCompetencie(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.competencieRepo.delete(id);
        });
    }
}
exports.CompetencieService = CompetencieService;
