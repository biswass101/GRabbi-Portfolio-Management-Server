import { IEducation } from "../models/Education.model";
import { EducationRepository } from "../repositories/EducationRepository";

export class EducationService {
    constructor(
        private educationRepo: EducationRepository
    ) {}

    async createEducation(education: IEducation): Promise<IEducation> {
    return await this.educationRepo.create(education);
  }

  async getAllEducations(): Promise<IEducation[]> {
    return await this.educationRepo.findAll();
  }

  async getEducationById(id: string): Promise<IEducation | null> {
    return await this.educationRepo.findById(id);
  }

  async updateEducation(id: string, data: Partial<IEducation>): Promise<IEducation | null> {
    return await this.educationRepo.update(id, data)
  }

  async deleteEducation(id: string): Promise<IEducation | null> {
    return await this.educationRepo.delete(id);
  }
}