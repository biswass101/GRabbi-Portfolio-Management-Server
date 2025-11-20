
import { IRepository } from "../../../core/repositories/BaseRepository";
import { CertificationModel, ICertification } from "../models/Certification.model";

export class CertificationRepository implements IRepository<ICertification> {
  async create(data: ICertification): Promise<ICertification> {
    return await CertificationModel.create(data);
  }

  async findAll(): Promise<ICertification[]> {
    return await CertificationModel.find();
  }

  async findAllByUserId(userId: string): Promise<ICertification[]> {
    return await CertificationModel.find({userId});
  }

  async findById(id: string): Promise<ICertification | null> {
    return await CertificationModel.findById(id);
  }

  async update(id: string, data: Partial<ICertification>): Promise<ICertification | null> {
    return await CertificationModel.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string): Promise<ICertification | null> {
    const result = await CertificationModel.findByIdAndDelete(id);
    return result;
  }
}
