import { model, Schema } from "mongoose";

export interface IEducation extends Document {
  userId: Schema.Types.ObjectId;
  degree: string;
  institution: string;
  major: string;
  year: string;
}

const educationSchema = new Schema<IEducation>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    degree: { type: String, required: true },
    institution: { type: String, required: true },
    major: { type: String, required: true },
    year: { type: String, required: true },
  },
  { timestamps: true }
);

export const EducationModel = model<IEducation>("Education", educationSchema);
