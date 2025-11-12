import { ICompetencie } from "../models/Competencie.model";
import { CompetencieRepository } from "../repositories/CompetencieRepository";

export class CompetencieService {
    constructor(
        private competencieRepo: CompetencieRepository
    ) {}

    async createCompetencie(competencie: ICompetencie): Promise<ICompetencie> {
    return await this.competencieRepo.create(competencie);
  }

  async getAllCompetencies(): Promise<ICompetencie[]> {
    return await this.competencieRepo.findAll();
  }

  async getCompetencieById(id: string): Promise<ICompetencie | null> {
    return await this.competencieRepo.findById(id);
  }

  async updateCompetencie(id: string, data: Partial<ICompetencie>): Promise<ICompetencie | null> {
    return await this.competencieRepo.update(id, data)
  }

  async deleteCompetencie(id: string): Promise<ICompetencie | null> {
    return await this.competencieRepo.delete(id);
  }
}