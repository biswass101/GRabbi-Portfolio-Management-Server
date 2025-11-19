import { DashboardRepository } from "../repositories/DashboardRepository"

const dashboardRepo = new DashboardRepository();

export class DashboardService {
    async getStats(userId: string) {
        const result = await dashboardRepo.getCounts(userId);
        return result;
    }
}