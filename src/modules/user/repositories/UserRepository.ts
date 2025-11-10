import { IRepository } from "../../../core/repositories/BaseRepository";
import { IUser, UserModel } from "../models/User.model";

export class UserRepository implements IRepository<IUser> {
  async create(user: IUser): Promise<IUser> {
    return await UserModel.create(user);
  }

  async findAll(): Promise<IUser[]> {
    return await UserModel.find();
  }

  async findById(id: string): Promise<IUser | null> {
    return await UserModel.findById(id);
  }

  async findByEmail(email: string): Promise<IUser | null> {
    return await UserModel.findOne({ email });
  }

  async update(id: string, data: Partial<IUser>): Promise<IUser | null> {
    return await UserModel.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string): Promise<IUser | null> {
    return await UserModel.findByIdAndDelete(id);
  }
}
