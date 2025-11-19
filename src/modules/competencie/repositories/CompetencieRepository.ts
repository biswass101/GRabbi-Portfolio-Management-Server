import { IRepository } from "../../../core/repositories/BaseRepository";
import { CompetencieModel, ICompetencie } from "../models/Competencie.model";

export class CompetencieRepository implements IRepository<ICompetencie> {
  async create(data: ICompetencie): Promise<ICompetencie> {
    return await CompetencieModel.create(data);
  }

  async findAll(): Promise<ICompetencie[]> {
    return await CompetencieModel.find();
  }

  async findAllByUserId(userId: string): Promise<ICompetencie[]> {
    console.log("kjs", userId)
    return await CompetencieModel.find({ userId });
  }

  async findById(id: string): Promise<ICompetencie | null> {
    return await CompetencieModel.findById(id);
  }

  async update(
    id: string,
    data: Partial<ICompetencie>
  ): Promise<ICompetencie | null> {
    return await CompetencieModel.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string): Promise<ICompetencie | null> {
    const result = await CompetencieModel.findByIdAndDelete(id);
    return result;
  }
}
