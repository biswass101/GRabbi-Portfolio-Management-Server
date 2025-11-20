import { Request, Response } from "express";
import sendResponse from "../../../shared/utils/sendResponse";
import httpStatus from "http-status";
import { ProjectRepository } from "../repositories/ProjectRepository";
import { ProjectService } from "../services/ProjectService";

const projectRepo = new ProjectRepository();
export const projectService = new ProjectService(projectRepo);

export class ProjectController {
  async create(req: Request, res: Response) {
    const project = await projectService.createProject(req.body);
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Project created",
      data: project,
    });
  }

  async getAll(req: Request, res: Response) {
    const projects = await projectService.getAllProjects(req.query);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Projects retrieved",
      data: projects,
    });
  }

  async getOne(req: Request, res: Response) {
    const { id } = req.params;
    const project = await projectService.getProjectById(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Project retrieved",
      data: project,
    });
  }

  async update(req: Request, res: Response) {
    const project = await projectService.updateProject(req.params.id, req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Project updated",
      data: project,
    });
  }

  async delete(req: Request, res: Response) {
    const project = await projectService.deleteProject(req.params.id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Project deleted",
      data: project,
    });
  }
}
