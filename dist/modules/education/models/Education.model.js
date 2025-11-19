"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducationModel = void 0;
const mongoose_1 = require("mongoose");
const educationSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: true },
    degree: { type: String, required: true },
    institution: { type: String, required: true },
    major: { type: String, required: true },
    year: { type: String, required: true },
}, { timestamps: true });
exports.EducationModel = (0, mongoose_1.model)("Education", educationSchema);
