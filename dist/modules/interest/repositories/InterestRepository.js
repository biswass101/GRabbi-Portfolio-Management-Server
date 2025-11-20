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
exports.InterestRepository = void 0;
const Interest_model_1 = require("../models/Interest.model");
class InterestRepository {
    create(interest) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Interest_model_1.InterestModel.create(interest);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Interest_model_1.InterestModel.find();
        });
    }
    findAllByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Interest_model_1.InterestModel.find({ userId });
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Interest_model_1.InterestModel.findById(id);
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Interest_model_1.InterestModel.findByIdAndUpdate(id, data, { new: true });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield Interest_model_1.InterestModel.findByIdAndDelete(id);
            return result;
        });
    }
}
exports.InterestRepository = InterestRepository;
