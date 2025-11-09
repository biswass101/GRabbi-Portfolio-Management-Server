import mongoose, { Schema } from "mongoose";

export interface IExperience extends Document {
  userId: Schema.Types.ObjectId;
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

const ExperienceSchema = new Schema<IExperience>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true },
    company: { type: String, required: true },
    period: { type: String, required: true },
    responsibilities: [{ type: String }],
  },
  { timestamps: true }
);

export const Experience = mongoose.model<IExperience>(
  "Experience",
  ExperienceSchema
);
