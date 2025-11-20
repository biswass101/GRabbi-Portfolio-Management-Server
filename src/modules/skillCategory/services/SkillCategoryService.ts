import { ISkillCategory } from "../models/SkillCategory.model";
import { SkillCategoryRepository } from "../repositories/SkillCategoryRepository";

export class SkillCategoryService {
  constructor(private skillCategoryRepo: SkillCategoryRepository) {}

  async createSkillCategory(data: ISkillCategory): Promise<ISkillCategory> {
    return await this.skillCategoryRepo.create(data);
  }

  async getAllSkillCategories(query: {
    userId?: string;
  }): Promise<ISkillCategory[]> {
    if (query.userId)
      return await this.skillCategoryRepo.findAllByUserId(query.userId);

    return await this.skillCategoryRepo.findAll();
  }

  async getSkillCategoryById(id: string): Promise<ISkillCategory | null> {
    return await this.skillCategoryRepo.findById(id);
  }

  async updateSkillCategory(
    id: string,
    data: Partial<ISkillCategory>
  ): Promise<ISkillCategory | null> {
    return await this.skillCategoryRepo.update(id, data);
  }

  async deleteSkillCategory(id: string): Promise<ISkillCategory | null> {
    return await this.skillCategoryRepo.delete(id);
  }
}
