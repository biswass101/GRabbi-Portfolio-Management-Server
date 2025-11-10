import { Router } from 'express';
import { userRoutes } from '../modules/user/routes/user.route';
import { authRoutes } from '../modules/auth/routes/auth.route';
const router = Router();

router.use('/users', userRoutes);
router.use('/auth', authRoutes);
// router.use('/contacts')

export default router;