import mongoose from "mongoose";
import { Schema } from "mongoose";

export interface IProject extends Document {
  userId: Schema.Types.ObjectId;
  icon: string;
  title: string;
  description: string;
  color: string;
}

const ProjectSchema = new Schema<IProject>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    icon: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    color: { type: String, required: true },
  },
  { timestamps: true }
);

export const Project = mongoose.model<IProject>("Project", ProjectSchema);
