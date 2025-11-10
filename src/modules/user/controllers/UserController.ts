import { Request, Response } from "express";
import { UserService } from "../services/UserService";
import { UserRepository } from "../repositories/UserRepository";
import sendResponse from "../../../shared/utils/sendResponse";
import httpStatus from 'http-status'
import { HashService } from "../../../core/utils/hash.service";

const userRepo = new UserRepository();
const hashService = new HashService();
const userService = new UserService(userRepo, hashService);

export class UserController {
  async create(req: Request, res: Response) {
    const user = await userService.createUser(req.body);
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "User created",
      data: user
    })
  }

  async getAll(req: Request, res: Response) {
    const users = await userService.getAllUsers();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User retrieved",
      data: users
    })
  }

  async getOne(req: Request, res: Response) {
    const { id } = req.params;
    const user = await userService.getUserById(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Single user retrieved",
      data: user
    })
  }

  async update(req: Request, res: Response) {
    const user = await userService.updateUser(req.params.id, req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User updated",
      data: user
    })
  }

  async delete(req: Request, res: Response) {
    const user = await userService.deleteUser(req.params.id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User deleted",
      data: user
    })
  }
}
