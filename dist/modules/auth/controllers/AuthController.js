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
exports.AuthController = void 0;
const UserRepository_1 = require("../../user/repositories/UserRepository");
const hash_service_1 = require("../../../core/utils/hash.service");
const UserController_1 = require("../../user/controllers/UserController");
const AuthService_1 = require("../services/AuthService");
const jwt_1 = require("../../../core/utils/jwt");
const env_config_1 = require("../../../config/env.config");
const sendResponse_1 = __importDefault(require("../../../shared/utils/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const AuthRepository_1 = require("../repositories/AuthRepository");
const userRepo = new UserRepository_1.UserRepository();
const authRepo = new AuthRepository_1.AuthRepository();
const hashService = new hash_service_1.HashService();
const jwtService = new jwt_1.JwtService({
    secret: "jwt-secret-portf",
    expiresIn: "1d",
});
const authService = new AuthService_1.AuthService(userRepo, authRepo, hashService, jwtService);
const userController = new UserController_1.UserController();
class AuthController {
    signupUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield userController.create(req, res);
        });
    }
    signinUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const user = yield authService.signinUser(req.body);
            const { accessToken, refreshToken, isUserExists } = user;
            const isProduction = env_config_1.config.app.env === "production";
            const tokenResult = yield authService.createRefreshToken((_a = isUserExists._id) === null || _a === void 0 ? void 0 : _a.toString(), refreshToken, req);
            res.cookie("refreshToken", refreshToken, {
                httpOnly: true,
                secure: isProduction,
                sameSite: isProduction ? "none" : "lax",
                maxAge: 1000 * 60 * 60 * 24 * 30,
            });
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "Loign Successfully",
                data: { accessToken, userId: (_b = isUserExists._id) === null || _b === void 0 ? void 0 : _b.toString() }
            });
        });
    }
    changePassword(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield authService.changePassword(req === null || req === void 0 ? void 0 : req.user, req.body);
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "Password Changed Successfully",
                data: result,
            });
        });
    }
    refreshToken(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield authService.refreshToken(req.cookies.refreshToken);
            const { newRefreshToken, newAccessToken, userId } = result;
            yield authService.createRefreshToken(userId, newRefreshToken, req);
            res.cookie("refreshToken", newRefreshToken, {
                secure: env_config_1.config.app.env === "production",
                httpOnly: true,
                sameSite: "none",
                maxAge: 1000 * 60 * 60 * 24 * 30,
            });
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "Token is refresed Successfully",
                data: { newAccessToken },
            });
        });
    }
    forgetPassword(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield authService.forgetPassword(req.body.email);
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "Please Check your email",
                data: result,
            });
        });
    }
    resetPassword(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = req.headers.authorization;
            const result = yield authService.resetPassword(req.body, token);
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "Password has been reset",
                data: result,
            });
        });
    }
    logoutUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { refreshToken } = req.cookies;
            yield authService.logoutUser(refreshToken, req.headers["user-agent"]);
            res.clearCookie("refreshToken", {
                secure: env_config_1.config.app.env === "production",
                httpOnly: true,
                sameSite: "none",
            });
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "Logout Successfully",
                data: null,
            });
        });
    }
}
exports.AuthController = AuthController;
