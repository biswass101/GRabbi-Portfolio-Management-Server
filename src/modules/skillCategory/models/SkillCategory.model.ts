import mongoose, { Schema } from "mongoose";

export interface ISkillCategory extends Document {
  userId: Schema.Types.ObjectId;
  icon: string;
  title: string;
  skills: string[];
}

const SkillCategorySchema = new Schema<ISkillCategory>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    icon: { type: String, required: true },
    title: { type: String, required: true },
    skills: [{ type: String }],
  },
  { timestamps: true }
);

export const SkillCategoryModel = mongoose.model<ISkillCategory>(
  "SkillCategory",
  SkillCategorySchema
);
