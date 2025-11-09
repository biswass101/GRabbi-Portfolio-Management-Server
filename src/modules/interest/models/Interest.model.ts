import mongoose from "mongoose";
import { Schema } from "mongoose";

export interface IInterest extends Document {
  userId: Schema.Types.ObjectId;
  title: string;
}

const InterestSchema = new Schema<IInterest>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true },
  },
  { timestamps: true }
);

export const InterestModel = mongoose.model<IInterest>("Interest", InterestSchema);
