import { IRefreshToken, RefreshTokenModel } from "../models/refreshToken.model";

export class AuthRepository {

  async getRefreshToken(id: string) {
    return await RefreshTokenModel.findOne({userId: id})
  }

  async createRefreshToken(data: any) {
    return await RefreshTokenModel.create(data);
  }

  async deleteRefreshTokens(userId: string, userAgent: string) {
    return await RefreshTokenModel.deleteMany({userId, userAgent});
  }
}
