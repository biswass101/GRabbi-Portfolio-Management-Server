"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const db_config_1 = require("./config/db.config");
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const globalErrorHandler_1 = require("./shared/middlewares/globalErrorHandler");
const notFound_1 = __importDefault(require("./shared/middlewares/notFound"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        (0, db_config_1.connectDB)();
        this.config();
        this.routes();
        this.middlewares();
    }
    config() {
        this.app.use((0, cors_1.default)({
            origin: "http://localhost:8080", // your frontend URL
            credentials: true, // allow cookies, auth headers
            methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
        }));
        this.app.use(express_1.default.json());
        this.app.use((0, cookie_parser_1.default)());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    routes() {
        this.app.use("/api/v1", routes_1.default);
    }
    middlewares() {
        this.app.use(notFound_1.default);
        this.app.use(globalErrorHandler_1.globalErrorHanlder);
    }
}
exports.App = App;
