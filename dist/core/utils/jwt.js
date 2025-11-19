"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
;
class JwtService {
    constructor(config) {
        var _a;
        this.secret = config.secret;
        this.expiresIn = (_a = config.expiresIn) !== null && _a !== void 0 ? _a : "1d";
    }
    sign(payload, options) {
        var _a, _b;
        return jsonwebtoken_1.default.sign(payload, (_a = options === null || options === void 0 ? void 0 : options.secret) !== null && _a !== void 0 ? _a : this.secret, {
            expiresIn: (_b = options === null || options === void 0 ? void 0 : options.expiresIn) !== null && _b !== void 0 ? _b : this.expiresIn
        });
    }
    verify(token, secret) {
        return jsonwebtoken_1.default.verify(token, secret !== null && secret !== void 0 ? secret : this.secret);
    }
}
exports.JwtService = JwtService;
