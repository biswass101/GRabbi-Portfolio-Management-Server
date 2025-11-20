import { IContact } from "../models/Contact.model";
import { ContactRepository } from "../repositories/ContactRepository";

export class ContactService {
    constructor(
        private contactRepo: ContactRepository
    ) {}

    async createContact(contact: IContact): Promise<IContact> {
    return await this.contactRepo.create(contact);
  }

  async getAllContacts(query: {userId?: string}): Promise<IContact[]> {
    if(query.userId) return await this.contactRepo.findAllByUserId(query.userId);
    return await this.contactRepo.findAll();
  }
  

  async getContactById(id: string): Promise<IContact | null> {
    return await this.contactRepo.findById(id);
  }

  async updateContact(id: string, data: Partial<IContact>): Promise<IContact | null> {
    return await this.contactRepo.update(id, data)
  }

  async deleteContact(id: string): Promise<IContact | null> {
    return await this.contactRepo.delete(id);
  }
}