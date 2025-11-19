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
exports.AuthGuard = void 0;
const apiError_1 = __importDefault(require("../../shared/utils/apiError"));
const http_status_1 = __importDefault(require("http-status"));
const env_config_1 = require("../../config/env.config");
const UserController_1 = require("../../modules/user/controllers/UserController");
class AuthGuard {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    handle(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const token = req.headers.authorization;
                if (!token)
                    throw new apiError_1.default(http_status_1.default.UNAUTHORIZED, "Token Not Found. Unauthorized user!");
                const decoded = this.jwtService.verify(token, env_config_1.config.jwt.secret);
                if (!decoded)
                    throw new apiError_1.default(http_status_1.default.UNAUTHORIZED, "Could not verify token. Unauthorized user");
                const { sub, role } = decoded;
                const user = yield UserController_1.userService.getUserById(sub);
                if (!user)
                    throw new apiError_1.default(http_status_1.default.NOT_FOUND, "User Not Found!");
                if (role !== 'admin')
                    throw new apiError_1.default(http_status_1.default.UNAUTHORIZED, "Role mismatched. Unauthorized!");
                console.log(user);
                req.user = decoded;
                next();
            }
            catch (error) {
                throw new apiError_1.default(http_status_1.default.UNAUTHORIZED, "Unauthorized or invalid token");
            }
        });
    }
}
exports.AuthGuard = AuthGuard;
