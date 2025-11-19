import { CertificationModel } from "../../certification/models/Certification.model";
import { CompetencieModel } from "../../competencie/models/Competencie.model";
import { ContactModel } from "../../contact/models/Contact.model";
import { EducationModel } from "../../education/models/Education.model";
import { Experience } from "../../experience/models/Experience.model";
import { Project } from "../../project/models/Project.model";
import { SkillCategoryModel } from "../../skillCategory/models/SkillCategory.model";

export class DashboardRepository {
  async getCounts(userId: string) {
    const [
      contactCount,
      competencyCount,
      skillCount,
      experienceCount,
      projectsCount,
      educationCount,
      certificationCount,
    ] = await Promise.all([
      ContactModel.countDocuments({ userId }),
      CompetencieModel.countDocuments({ userId }),
      SkillCategoryModel.countDocuments({ userId }),
      Experience.countDocuments({ userId }),
      Project.countDocuments({ userId }),
      EducationModel.countDocuments({ userId }),
      CertificationModel.countDocuments({ userId }),
    ]);

    return {
      contacts: contactCount,
      competencies: competencyCount,
      skills: skillCount,
      experiences: experienceCount,
      projects: projectsCount,
      education: educationCount,
      certifications: certificationCount,
    };
  }


  async updateCounts() {
    
  }
}
