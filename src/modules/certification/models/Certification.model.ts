import mongoose from "mongoose";
import { Schema } from "mongoose";

export interface ICertification extends Document {
  userId: Schema.Types.ObjectId;
  icon: string;
  title: string;
  provider: string;
  duration: string;
}

const CertificationSchema = new Schema<ICertification>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    icon: { type: String, required: true },
    title: { type: String, required: true },
    provider: { type: String, required: true },
    duration: { type: String, required: true },
  },
  { timestamps: true }
);

export const CertificationModel = mongoose.model<ICertification>(
  "Certification",
  CertificationSchema
);
