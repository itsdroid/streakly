import express from 'express';
const router = express.Router();
import { registerUser } from '../controllers/authController.js';

// ----- user auth APIs -----
router.post('/user/register', registerUser);
// router.post('/user/login', authController.loginUser);
// router.post('/user/logout', authController.logoutUser);

export default router;
