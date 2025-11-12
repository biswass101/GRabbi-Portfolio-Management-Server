import { Request, Response } from "express";
import sendResponse from "../../../shared/utils/sendResponse";
import httpStatus from 'http-status';
import { ContactRepository } from "../repositories/ContactRepository";
import { ContactService } from "../services/ContactService";


const contactRepo = new ContactRepository();
export const contactService = new ContactService(contactRepo);

export class ContactController {
  async create(req: Request, res: Response) {
    const contact = await contactService.createContact(req.body);
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Contact created",
      data: contact
    })
  }

  async getAll(req: Request, res: Response) {
    const contacts = await contactService.getAllContacts();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Contacts retrieved",
      data: contacts
    })
  }

  async getOne(req: Request, res: Response) {
    const { id } = req.params;
    const contact = await contactService.getContactById(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Contact retrieved",
      data: contact
    })
  }

  async update(req: Request, res: Response) {
    const contact = await contactService.updateContact(req.params.id, req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Contact updated",
      data: contact
    })
  }

  async delete(req: Request, res: Response) {
    const contact = await contactService.deleteContact(req.params.id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Contact deleted",
      data: contact
    })
  }
}
