import mongoose from "mongoose";
import { Schema } from "mongoose";

export interface ILanguage extends Document {
  userId: Schema.Types.ObjectId;
  language: string;
  writing: string;
  reading: string;
  speaking: string;
}

const LanguageSchema = new Schema<ILanguage>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    language: { type: String, required: true },
    writing: { type: String, required: true },
    reading: { type: String, required: true },
    speaking: { type: String, required: true },
  },
  { timestamps: true }
);

export const LanguageModel = mongoose.model<ILanguage>("Language", LanguageSchema);
