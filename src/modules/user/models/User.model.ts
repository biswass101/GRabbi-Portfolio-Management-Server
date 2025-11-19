import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  img: string;
  summary: string;
  role: "admin";
  createdAt?: Date;
  updatedAt?: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    img: { type: String, default: ""},
    summary: { type: String, default: ""},
    role: { type: String, default: "admin" },
  },
  { timestamps: true }
);


export const UserModel = mongoose.model<IUser>("User", UserSchema);
