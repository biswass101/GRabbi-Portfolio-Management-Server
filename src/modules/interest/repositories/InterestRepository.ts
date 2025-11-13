import { IRepository } from "../../../core/repositories/BaseRepository";
import { InterestModel, IInterest } from "../models/Interest.model";

export class InterestRepository implements IRepository<IInterest> {
  async create(interest: IInterest): Promise<IInterest> {
    return await InterestModel.create(interest);
  }

  async findAll(): Promise<IInterest[]> {
    return await InterestModel.find();
  }

  async findById(id: string): Promise<IInterest | null> {
    return await InterestModel.findById(id);
  }

  async update(id: string, data: Partial<IInterest>): Promise<IInterest | null> {
    return await InterestModel.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string): Promise<IInterest | null> {
    const result = await InterestModel.findByIdAndDelete(id);
    return result;
  }
}
