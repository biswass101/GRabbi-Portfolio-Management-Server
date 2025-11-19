"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertificationModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
const CertificationSchema = new mongoose_2.Schema({
    userId: { type: mongoose_2.Schema.Types.ObjectId, ref: "User", required: true },
    icon: { type: String, required: true },
    title: { type: String, required: true },
    provider: { type: String, required: true },
    duration: { type: String, required: true },
}, { timestamps: true });
exports.CertificationModel = mongoose_1.default.model("Certification", CertificationSchema);
