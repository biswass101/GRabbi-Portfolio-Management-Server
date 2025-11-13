import mongoose, { Schema } from "mongoose";

export interface IContact extends Document {
  userId: Schema.Types.ObjectId;
  type: string;                        
  iconUrl?: string;
  detail: string;
  href?: string;
}

const ContactSchema = new Schema<IContact>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    type: { type: String, required: true },
    iconUrl: { type: String },
    detail: { type: String, required: true },
    href: { type: String },
  },
  { timestamps: true }
);

export const ContactModel = mongoose.model<IContact>("Contact", ContactSchema);
