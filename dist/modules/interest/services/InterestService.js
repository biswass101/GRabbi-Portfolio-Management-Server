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
exports.InterestService = void 0;
class InterestService {
    constructor(interestRepo) {
        this.interestRepo = interestRepo;
    }
    createInterest(interest) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.interestRepo.create(interest);
        });
    }
    getAllInterests(query) {
        return __awaiter(this, void 0, void 0, function* () {
            if (query.userId)
                return yield this.interestRepo.findAllByUserId(query.userId);
            return yield this.interestRepo.findAll();
        });
    }
    getInterestById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.interestRepo.findById(id);
        });
    }
    updateInterest(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.interestRepo.update(id, data);
        });
    }
    deleteInterest(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.interestRepo.delete(id);
        });
    }
}
exports.InterestService = InterestService;
