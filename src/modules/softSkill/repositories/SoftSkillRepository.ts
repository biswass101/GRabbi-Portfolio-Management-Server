import { IRepository } from "../../../core/repositories/BaseRepository";
import { ISoftSkill, SoftSkillModel } from "../models/SoftSkill.model";

export class SoftSkillRepository implements IRepository<ISoftSkill> {
  async create(softSkill: ISoftSkill): Promise<ISoftSkill> {
    return await SoftSkillModel.create(softSkill);
  }

  async findAll(): Promise<ISoftSkill[]> {
    return await SoftSkillModel.find();
  }

  async findAllByUserId(userId: string): Promise<ISoftSkill[]> {
    return await SoftSkillModel.find({ userId });
  }

  async findById(id: string): Promise<ISoftSkill | null> {
    return await SoftSkillModel.findById(id);
  }

  async update(
    id: string,
    data: Partial<ISoftSkill>
  ): Promise<ISoftSkill | null> {
    return await SoftSkillModel.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string): Promise<ISoftSkill | null> {
    return await SoftSkillModel.findByIdAndDelete(id);
  }
}
