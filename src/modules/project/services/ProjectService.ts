import { IProject } from "../models/Project.model";
import { ProjectRepository } from "../repositories/ProjectRepository";

export class ProjectService {
  constructor(private projectRepo: ProjectRepository) {}

  async createProject(project: IProject): Promise<IProject> {
    return await this.projectRepo.create(project);
  }

  async getAllProjects(): Promise<IProject[]> {
    return await this.projectRepo.findAll();
  }

  async getProjectById(id: string): Promise<IProject | null> {
    return await this.projectRepo.findById(id);
  }

  async updateProject(id: string, data: Partial<IProject>): Promise<IProject | null> {
    return await this.projectRepo.update(id, data);
  }

  async deleteProject(id: string): Promise<IProject | null> {
    return await this.projectRepo.delete(id);
  }
}
