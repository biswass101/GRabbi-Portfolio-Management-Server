import { IInterest } from "../models/Interest.model";
import { InterestRepository } from "../repositories/InterestRepository";

export class InterestService {
  constructor(private interestRepo: InterestRepository) {}

  async createInterest(interest: IInterest): Promise<IInterest> {
    return await this.interestRepo.create(interest);
  }

  async getAllInterests(): Promise<IInterest[]> {
    return await this.interestRepo.findAll();
  }

  async getInterestById(id: string): Promise<IInterest | null> {
    return await this.interestRepo.findById(id);
  }

  async updateInterest(id: string, data: Partial<IInterest>): Promise<IInterest | null> {
    return await this.interestRepo.update(id, data);
  }

  async deleteInterest(id: string): Promise<IInterest | null> {
    return await this.interestRepo.delete(id);
  }
}
