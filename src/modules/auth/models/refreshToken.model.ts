// models/RefreshToken.ts
import mongoose, { Schema, model, Document, Types } from "mongoose";

export interface IRefreshToken extends Document {
  userId: Types.ObjectId;
  tokenHash: string;
  userAgent?: string;
  ipAddress?: string;
  createdAt: Date;
  expiresAt: Date;
  revokedAt?: Date;
}

const refreshTokenSchema = new Schema<IRefreshToken>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    tokenHash: { type: String, required: true },
    userAgent: String,
    ipAddress: String,
    createdAt: { type: Date, default: Date.now },
    expiresAt: { type: Date, required: true },
    revokedAt: { type: Date },
  },
  { timestamps: true }
);

// Index to automatically remove expired tokens
refreshTokenSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

// Helper methods
refreshTokenSchema.methods.isExpired = function (): boolean {
  return Date.now() >= this.expiresAt.getTime();
};

refreshTokenSchema.methods.isRevoked = function (): boolean {
  return !!this.revokedAt;
};

export const RefreshTokenModel = mongoose.model<IRefreshToken>("RefreshToken", refreshTokenSchema);
