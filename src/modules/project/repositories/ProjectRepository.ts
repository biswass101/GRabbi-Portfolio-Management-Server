import { IRepository } from "../../../core/repositories/BaseRepository";
import { Project, IProject } from "../models/Project.model";

export class ProjectRepository implements IRepository<IProject> {
  async create(project: IProject): Promise<IProject> {
    return await Project.create(project);
  }

  async findAll(): Promise<IProject[]> {
    return await Project.find();
  }

  async findAllByUserId(userId: string): Promise<IProject[]> {
    return await Project.find({ userId });
  }

  async findById(id: string): Promise<IProject | null> {
    return await Project.findById(id);
  }

  async update(id: string, data: Partial<IProject>): Promise<IProject | null> {
    return await Project.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string): Promise<IProject | null> {
    const result = await Project.findByIdAndDelete(id);
    return result;
  }
}
