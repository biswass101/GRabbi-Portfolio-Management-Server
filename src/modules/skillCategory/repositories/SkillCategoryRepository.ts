import { IRepository } from "../../../core/repositories/BaseRepository";
import { ISkillCategory, SkillCategoryModel } from "../models/SkillCategory.model";

export class SkillCategoryRepository implements IRepository<ISkillCategory> {
  async create(skillCategory: ISkillCategory): Promise<ISkillCategory> {
    return await SkillCategoryModel.create(skillCategory);
  }

  async findAll(): Promise<ISkillCategory[]> {
    return await SkillCategoryModel.find();
  }

  async findById(id: string): Promise<ISkillCategory | null> {
    return await SkillCategoryModel.findById(id);
  }

  async update(id: string, data: Partial<ISkillCategory>): Promise<ISkillCategory | null> {
    return await SkillCategoryModel.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string): Promise<ISkillCategory | null> {
    return await SkillCategoryModel.findByIdAndDelete(id);
  }
}
