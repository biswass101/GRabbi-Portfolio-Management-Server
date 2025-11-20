import { IRepository } from "../../../core/repositories/BaseRepository";
import { Experience, IExperience } from "../models/Experience.model";

export class ExperienceRepository implements IRepository<IExperience> {
  async create(experience: IExperience): Promise<IExperience> {
    return await Experience.create(experience);
  }

  async findAll(): Promise<IExperience[]> {
    return await Experience.find();
  }

    async findAllByUserId(userId: string): Promise<IExperience[]> {
      return await Experience.find({ userId });
    }

  async findById(id: string): Promise<IExperience | null> {
    return await Experience.findById(id);
  }

  async update(id: string, data: Partial<IExperience>): Promise<IExperience | null> {
    return await Experience.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string): Promise<IExperience | null> {
    const result = await Experience.findByIdAndDelete(id);
    return result;
  }
}
