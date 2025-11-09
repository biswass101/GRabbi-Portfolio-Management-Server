import mongoose, { Schema } from "mongoose";

export interface ISoftSkill extends Document {
  userId: Schema.Types.ObjectId;
  icon: string;
  title: string;
}

const SoftSkillSchema = new Schema<ISoftSkill>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    icon: { type: String, required: true },
    title: { type: String, required: true },
  },
  { timestamps: true }
);

export const SoftSkillModel = mongoose.model<ISoftSkill>("SoftSkill", SoftSkillSchema);
