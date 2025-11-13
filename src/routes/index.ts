import { Router } from 'express';
import { userRoutes } from '../modules/user/routes/user.route';
import { authRoutes } from '../modules/auth/routes/auth.route';
import { certificationRoutes } from '../modules/certification/routes/certification.route';
import { contactRoutes } from '../modules/contact/routes/contact.route';
import { competencieRoutes } from '../modules/competencie/routes/competencie.route';
import { educationRoutes } from '../modules/education/routes/education.route';
import { experienceRoutes } from '../modules/experience/routes/experience.route.ts';
import { interestRoutes } from '../modules/interest/routes/interest.route';
import { languageRoutes } from '../modules/language/routes/language.route';
import { projectRoutes } from '../modules/project/routes/project.route';
import { skillCategoryRoutes } from '../modules/skillCategory/routes/skillCategory.route';
import { softSkillRoutes } from '../modules/softSkill/routes/softSkill.routes';
const router = Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/certifications', certificationRoutes);
router.use('/contacts', contactRoutes);
router.use('/competencies', competencieRoutes);
router.use('/educations', educationRoutes);
router.use('/experiences', experienceRoutes);
router.use('/interests', interestRoutes);
router.use('/languages', languageRoutes);
router.use('/projects', projectRoutes);
router.use('/skillCategories', skillCategoryRoutes);
router.use('/softSkills', softSkillRoutes);

export default router;