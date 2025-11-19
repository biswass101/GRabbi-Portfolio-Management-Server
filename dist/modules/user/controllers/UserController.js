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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = exports.userService = void 0;
const UserService_1 = require("../services/UserService");
const UserRepository_1 = require("../repositories/UserRepository");
const sendResponse_1 = __importDefault(require("../../../shared/utils/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const hash_service_1 = require("../../../core/utils/hash.service");
const userRepo = new UserRepository_1.UserRepository();
const hashService = new hash_service_1.HashService();
exports.userService = new UserService_1.UserService(userRepo, hashService);
class UserController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield exports.userService.createUser(req.body);
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.CREATED,
                success: true,
                message: "User created",
                data: user
            });
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield exports.userService.getAllUsers();
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "User retrieved",
                data: users
            });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const user = yield exports.userService.getUserById(id);
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "Single user retrieved",
                data: user
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield exports.userService.updateUser(req.params.id, req.body);
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "User updated",
                data: user
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield exports.userService.deleteUser(req.params.id);
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "User deleted",
                data: user
            });
        });
    }
}
exports.UserController = UserController;
