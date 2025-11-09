import mongoose, { Schema } from "mongoose";

export interface ICompetency extends Document {
  userId: Schema.Types.ObjectId;
  icon: string;
  title: string;
  description: string;
}

const CompetencySchema = new Schema<ICompetency>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    icon: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

export const CompetencyModel = mongoose.model<ICompetency>(
  "Competency",
  CompetencySchema
);
