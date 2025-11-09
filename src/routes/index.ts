import { Router } from 'express';
import { userRoutes } from '../modules/user/routes/user.route';
const router = Router();

router.use('/users', userRoutes);
// router.use('/contacts')

export default router;