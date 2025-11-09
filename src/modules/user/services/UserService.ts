import { UserRepository } from "../repositories/UserRepository";
import { IUser } from "../models/User.model";
import bcrypt from "bcrypt";
import ApiError from "../../../shared/utils/apiError";
import httpStatus from "http-status";

export class UserService {
  constructor(private userRepo: UserRepository) {}

  async createUser(user: IUser): Promise<IUser> {
    const isExists = await this.userRepo.findByEmail(user.email);
    if(isExists) throw new ApiError(httpStatus.CONFLICT, "User Already Exists");
    const hashed = await bcrypt.hash(user.password, 10);
    user.password = hashed
    return await this.userRepo.create(user) as IUser;
  }

  async getAllUsers(): Promise<IUser[]> {
    return await this.userRepo.findAll();
  }

  async getUserById(id: string): Promise<IUser | null> {
    return await this.userRepo.findById(id);
  }

  async getUserByEmail(email: string): Promise<IUser | null> {
    return await this.userRepo.findByEmail(email);
  }

  async updateUser(id: string, data: Partial<IUser>): Promise<IUser | null> {
    return await this.userRepo.update(id, data)
  }

  async deleteUser(id: string): Promise<IUser | null> {
    return await this.userRepo.delete(id);
  }
}
