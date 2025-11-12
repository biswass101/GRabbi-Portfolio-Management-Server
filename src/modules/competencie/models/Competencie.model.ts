import mongoose, { Schema } from "mongoose";

export interface ICompetencie extends Document {
  userId: Schema.Types.ObjectId;
  icon: string;
  title: string;
  description: string;
}

const CompetencieSchema = new Schema<ICompetencie>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    icon: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

export const CompetencieModel = mongoose.model<ICompetencie>(
  "Competencie",
  CompetencieSchema
);
