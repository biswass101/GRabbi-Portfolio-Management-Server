import { ICertification } from "../models/Certification.model";
import { CertificationRepository } from "../repositories/CertificationRepository";

export class CertificationService {
    constructor(
        private certificationRepo: CertificationRepository
    ) {}

    async createCertification(certification: ICertification): Promise<ICertification> {
    return await this.certificationRepo.create(certification);
  }

  async getAllCertifications(query: {userId?: string}): Promise<ICertification[]> {
    if(query.userId) return await this.certificationRepo.findAllByUserId(query.userId);
    return await this.certificationRepo.findAll();
  }

  async getCertificationById(id: string): Promise<ICertification | null> {
    return await this.certificationRepo.findById(id);
  }

  async updateCertification(id: string, data: Partial<ICertification>): Promise<ICertification | null> {
    return await this.certificationRepo.update(id, data)
  }

  async deleteCertification(id: string): Promise<ICertification | null> {
    return await this.certificationRepo.delete(id);
  }
}