import { IExperience } from "../models/Experience.model";
import { ExperienceRepository } from "../repositories/ExperienceRepository";

export class ExperienceService {
  constructor(private experienceRepo: ExperienceRepository) {}

  async createExperience(experience: IExperience): Promise<IExperience> {
    return await this.experienceRepo.create(experience);
  }

  async getAllExperiences(): Promise<IExperience[]> {
    return await this.experienceRepo.findAll();
  }

  async getExperienceById(id: string): Promise<IExperience | null> {
    return await this.experienceRepo.findById(id);
  }

  async updateExperience(id: string, data: Partial<IExperience>): Promise<IExperience | null> {
    return await this.experienceRepo.update(id, data);
  }

  async deleteExperience(id: string): Promise<IExperience | null> {
    return await this.experienceRepo.delete(id);
  }
}
