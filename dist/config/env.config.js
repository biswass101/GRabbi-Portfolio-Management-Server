"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const env = process.env;
exports.config = {
    app: {
        env: env.NODE_ENV,
        port: env.PORT,
    },
    clientSite: {
        reset_pass_ui_link: env.RESET_PASS_UI_LINK,
    },
    db: {
        uri: env.DB_URI,
    },
    jwt: {
        secret: env.JWT_SECRET,
        expiresIn: env.JWT_EXPIRES_IN,
        refreshSecret: env.JWT_REFRESH_SECRET,
        refreshExpiresIn: env.JWT_REFRESH_EXPIRES_IN,
        resetSecret: env.JWT_RESET_SECRET,
        resetExpiresIN: env.JWT_RESET_EXPIRES_IN,
    },
    smtp: {
        user: env.SMTP_AUTH_USER,
        pass: env.SMTP_AUTH_PASS,
    },
    cloudinary: {
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
    },
};
