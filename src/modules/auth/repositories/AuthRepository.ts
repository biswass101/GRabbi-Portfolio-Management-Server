import { IRefreshToken, RefreshTokenModel } from "../models/refreshToken.model";

export class AuthRepository {
  async createRefreshToken(data: any) {
    return await RefreshTokenModel.create(data);
  }

  async deleteRefreshTokens(userId: string, userAgent: string) {
    return await RefreshTokenModel.deleteMany({userId, userAgent});
  }
}
