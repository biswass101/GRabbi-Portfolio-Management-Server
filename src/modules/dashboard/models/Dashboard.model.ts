import mongoose, { Schema } from "mongoose";

export interface IDashboard extends Document {
  userId: Schema.Types.ObjectId;
  contacts: number;
  competencies: number;
  skills: number;
  experiences: number;
  projects: number;
  education: number;
  certifications: number;
}

const DashboardSchema = new Schema<IDashboard>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    contacts: { type: Number, default: 0 },
    competencies: { type: Number, default: 0 },
    experiences: { type: Number, default: 0 },
    projects: { type: Number, default: 0 },
    education: { type: Number, default: 0 },

    certifications: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const DashboardSchemaModel = mongoose.model<IDashboard>(
  "Dashboard",
  DashboardSchema
);
