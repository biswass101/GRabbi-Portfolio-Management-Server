import { ISoftSkill } from "../models/SoftSkill.model";
import { SoftSkillRepository } from "../repositories/SoftSkillRepository";

export class SoftSkillService {
  constructor(private softSkillRepo: SoftSkillRepository) {}

  async createSoftSkill(data: ISoftSkill): Promise<ISoftSkill> {
    return await this.softSkillRepo.create(data);
  }

  async getAllSoftSkills(query: { userId?: string }): Promise<ISoftSkill[]> {
    if (query.userId)
      return await this.softSkillRepo.findAllByUserId(query.userId);

    return await this.softSkillRepo.findAll();
  }

  async getSoftSkillById(id: string): Promise<ISoftSkill | null> {
    return await this.softSkillRepo.findById(id);
  }

  async updateSoftSkill(
    id: string,
    data: Partial<ISoftSkill>
  ): Promise<ISoftSkill | null> {
    return await this.softSkillRepo.update(id, data);
  }

  async deleteSoftSkill(id: string): Promise<ISoftSkill | null> {
    return await this.softSkillRepo.delete(id);
  }
}
