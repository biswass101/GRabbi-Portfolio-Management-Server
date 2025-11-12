import { Router } from 'express';
import { userRoutes } from '../modules/user/routes/user.route';
import { authRoutes } from '../modules/auth/routes/auth.route';
import { certificationRoutes } from '../modules/certification/routes/certification.route';
import { contactRoutes } from '../modules/contact/routes/contact.route';
const router = Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/certifications', certificationRoutes);
router.use('/contacts', contactRoutes)

export default router;