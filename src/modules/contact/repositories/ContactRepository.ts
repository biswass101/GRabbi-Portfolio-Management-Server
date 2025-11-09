import { IRepository } from "../../../core/repositories/BaseRepository";
import { ContactModel, IContact } from "../models/Contact.model";

export class ContactRepository implements IRepository<IContact> {
  async create(contact: IContact): Promise<IContact> {
    return await ContactModel.create(contact);
  }

  async findAll(): Promise<IContact[]> {
    return await ContactModel.find();
  }

  async findById(id: string): Promise<IContact | null> {
    return await ContactModel.findById(id);
  }

  async update(id: string, data: Partial<IContact>): Promise<IContact | null> {
    return await ContactModel.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string): Promise<boolean> {
    const result = await ContactModel.findByIdAndDelete(id);
    return !!result;
  }
}
