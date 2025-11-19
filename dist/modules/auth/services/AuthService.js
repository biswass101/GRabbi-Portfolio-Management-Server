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
exports.AuthService = void 0;
const env_config_1 = require("../../../config/env.config");
const apiError_1 = __importDefault(require("../../../shared/utils/apiError"));
const http_status_1 = __importDefault(require("http-status"));
const resetUi_1 = require("../../../html/ui/resetUi");
const sendEmail_1 = __importDefault(require("../../../shared/utils/sendEmail"));
class AuthService {
    constructor(userRopo, authRepo, hashService, jwtService) {
        this.userRopo = userRopo;
        this.authRepo = authRepo;
        this.hashService = hashService;
        this.jwtService = jwtService;
    }
    signupUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRopo.create(user);
        });
    }
    signinUser(credentials) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const isUserExists = yield this.userRopo.findByEmail(credentials.email);
            if (!isUserExists)
                throw new apiError_1.default(http_status_1.default.NOT_FOUND, "User not found");
            const isPasswordMatched = yield this.hashService.compare(credentials.password, isUserExists.password);
            if (!isPasswordMatched)
                throw new apiError_1.default(http_status_1.default.UNAUTHORIZED, "Passowrd did not matched!");
            const jwtPayload = {
                sub: (_a = isUserExists._id) === null || _a === void 0 ? void 0 : _a.toString(),
                name: isUserExists.name,
                email: isUserExists.email,
                role: isUserExists.role,
            };
            const accessToken = this.jwtService.sign(jwtPayload, {
                secret: env_config_1.config.jwt.secret,
                expiresIn: env_config_1.config.jwt.expiresIn,
            });
            const refreshToken = this.jwtService.sign(jwtPayload, {
                secret: env_config_1.config.jwt.refreshSecret,
                expiresIn: env_config_1.config.jwt.refreshExpiresIn,
            });
            return {
                accessToken,
                refreshToken,
                isUserExists,
            };
        });
    }
    changePassword(userData, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const user = yield this.userRopo.findById(userData.sub);
            if (!user)
                throw new apiError_1.default(http_status_1.default.NOT_FOUND, "User Not Found!");
            const isPasswordMatched = yield this.hashService.compare(payload.oldPassword, user.password);
            if (!isPasswordMatched)
                throw new apiError_1.default(http_status_1.default.FORBIDDEN, "Passowrd did not matched!");
            const newHashPassword = yield this.hashService.hash(payload.newPassword);
            const result = yield this.userRopo.update((_a = user._id) === null || _a === void 0 ? void 0 : _a.toString(), {
                password: newHashPassword,
            });
            return result;
        });
    }
    refreshToken(oldToken) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            if (!oldToken)
                throw new apiError_1.default(http_status_1.default.UNAUTHORIZED, "Token not Found. Unauthorized User!");
            const decoded = this.jwtService.verify(oldToken, env_config_1.config.jwt.refreshSecret);
            if (!decoded)
                throw new apiError_1.default(http_status_1.default.UNAUTHORIZED, "Couldn't verify the token. Unauthorized User!");
            const { sub } = decoded;
            console.log(sub);
            const existingToken = yield this.authRepo.getRefreshToken(decoded.sub);
            console.log(existingToken);
            if (!existingToken)
                throw new apiError_1.default(http_status_1.default.UNAUTHORIZED, "Token expired or invalid!");
            const user = yield this.userRopo.findById(sub);
            if (!user)
                throw new apiError_1.default(http_status_1.default.NOT_FOUND, "User Not Found!");
            const jwtPayload = {
                sub: (_a = user._id) === null || _a === void 0 ? void 0 : _a.toString(),
                name: user.name,
                email: user.email,
                role: user.role,
            };
            const newAccessToken = this.jwtService.sign(jwtPayload, {
                secret: env_config_1.config.jwt.secret,
                expiresIn: env_config_1.config.jwt.expiresIn,
            });
            const newRefreshToken = this.jwtService.sign(jwtPayload, {
                secret: env_config_1.config.jwt.refreshSecret,
                expiresIn: env_config_1.config.jwt.refreshExpiresIn,
            });
            return { newAccessToken, newRefreshToken, userId: sub };
        });
    }
    forgetPassword(email) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const user = yield this.userRopo.findByEmail(email);
            if (!user)
                throw new apiError_1.default(http_status_1.default.NOT_FOUND, "User Not Found!");
            const jwtPayload = {
                sub: (_a = user._id) === null || _a === void 0 ? void 0 : _a.toString(),
                name: user.name,
                email: user.email,
                role: user.role,
            };
            const resetPassToken = this.jwtService.sign(jwtPayload, {
                secret: env_config_1.config.jwt.resetSecret,
                expiresIn: env_config_1.config.jwt.resetExpiresIN,
            });
            const resetUILink = `${env_config_1.config.clientSite.reset_pass_ui_link}?id=${user === null || user === void 0 ? void 0 : user._id}&token=${resetPassToken}`;
            const resetUI = (0, resetUi_1.createEmailHtml)(user === null || user === void 0 ? void 0 : user.name, resetUILink);
            (0, sendEmail_1.default)(user === null || user === void 0 ? void 0 : user.email, "Reset your password", resetUI);
        });
    }
    resetPassword(payload, token) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRopo.findById(payload.id);
            if (!user)
                throw new apiError_1.default(http_status_1.default.NOT_FOUND, "User Not Found!");
            const decoded = this.jwtService.verify(token, env_config_1.config.jwt.resetSecret);
            if (payload.id !== decoded.sub) {
                throw new apiError_1.default(http_status_1.default.FORBIDDEN, "Forbidden Access!");
            }
            const hashNewPassword = yield this.hashService.hash(payload === null || payload === void 0 ? void 0 : payload.newPassword);
            yield this.userRopo.update(decoded.sub, { password: hashNewPassword });
        });
    }
    logoutUser(token, userAgent) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Token: ", token);
            const decoded = this.jwtService.verify(token, env_config_1.config.jwt.refreshSecret);
            if (!decoded)
                throw new apiError_1.default(http_status_1.default.UNAUTHORIZED, "Invalid Token");
            const user = yield this.userRopo.findById(decoded.sub);
            if (!user)
                throw new apiError_1.default(http_status_1.default.NOT_FOUND, "User Not Found!");
            yield this.deleteRefreshTokens(user._id, userAgent);
            return { message: "User logged out successfully" };
        });
    }
    createRefreshToken(userId, token, req) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("hello");
            const tokenHash = yield this.hashService.hash(token);
            const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
            const result1 = yield this.deleteRefreshTokens(userId, req.headers["user-agent"]);
            console.log(userId);
            const result = yield this.authRepo.createRefreshToken({
                userId,
                tokenHash,
                userAgent: req.headers["user-agent"],
                ipAddress: req.ip,
                expiresAt,
            });
            return result;
        });
    }
    deleteRefreshTokens(userId, userAgent) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.authRepo.deleteRefreshTokens(userId, userAgent);
        });
    }
}
exports.AuthService = AuthService;
