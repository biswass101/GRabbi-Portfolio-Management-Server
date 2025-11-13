import { IRepository } from "../../../core/repositories/BaseRepository";
import { LanguageModel, ILanguage } from "../models/Language.model";

export class LanguageRepository implements IRepository<ILanguage> {
  async create(language: ILanguage): Promise<ILanguage> {
    return await LanguageModel.create(language);
  }

  async findAll(): Promise<ILanguage[]> {
    return await LanguageModel.find();
  }

  async findById(id: string): Promise<ILanguage | null> {
    return await LanguageModel.findById(id);
  }

  async update(id: string, data: Partial<ILanguage>): Promise<ILanguage | null> {
    return await LanguageModel.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string): Promise<ILanguage | null> {
    const result = await LanguageModel.findByIdAndDelete(id);
    return result;
  }
}
