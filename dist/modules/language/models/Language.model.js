"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
const LanguageSchema = new mongoose_2.Schema({
    userId: { type: mongoose_2.Schema.Types.ObjectId, ref: "User", required: true },
    language: { type: String, required: true },
    writing: { type: String, required: true },
    reading: { type: String, required: true },
    speaking: { type: String, required: true },
}, { timestamps: true });
exports.LanguageModel = mongoose_1.default.model("Language", LanguageSchema);
