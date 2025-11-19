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
exports.UserRepository = void 0;
const User_model_1 = require("../models/User.model");
class UserRepository {
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield User_model_1.UserModel.create(user);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield User_model_1.UserModel.find();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield User_model_1.UserModel.findById(id);
        });
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield User_model_1.UserModel.findOne({ email });
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield User_model_1.UserModel.findByIdAndUpdate(id, data, { new: true });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield User_model_1.UserModel.findByIdAndDelete(id);
        });
    }
}
exports.UserRepository = UserRepository;
