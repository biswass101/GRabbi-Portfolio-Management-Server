import { IRepository } from "../../../core/repositories/BaseRepository";
import { EducationModel, IEducation } from "../models/Education.model";

export class EducationRepository implements IRepository<IEducation> {
  async create(education: IEducation): Promise<IEducation> {
    return await EducationModel.create(education);
  }

  async findAll(): Promise<IEducation[]> {
    return await EducationModel.find();
  }

  async findById(id: string): Promise<IEducation | null> {
    return await EducationModel.findById(id);
  }

  async update(id: string, data: Partial<IEducation>): Promise<IEducation | null> {
    return await EducationModel.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string): Promise<IEducation | null> {
    const result = await EducationModel.findByIdAndDelete(id);
    return result;
  }
}
