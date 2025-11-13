import { ILanguage } from "../models/Language.model";
import { LanguageRepository } from "../repositories/LanguageRepository";

export class LanguageService {
  constructor(private languageRepo: LanguageRepository) {}

  async createLanguage(language: ILanguage): Promise<ILanguage> {
    return await this.languageRepo.create(language);
  }

  async getAllLanguages(): Promise<ILanguage[]> {
    return await this.languageRepo.findAll();
  }

  async getLanguageById(id: string): Promise<ILanguage | null> {
    return await this.languageRepo.findById(id);
  }

  async updateLanguage(id: string, data: Partial<ILanguage>): Promise<ILanguage | null> {
    return await this.languageRepo.update(id, data);
  }

  async deleteLanguage(id: string): Promise<ILanguage | null> {
    return await this.languageRepo.delete(id);
  }
}
