import express from 'express';
const router = express.Router();
import authController from '../controllers/authController.js';

// ----- user auth APIs -----
router.post('/user/register', authController.registerUser);
router.post('/user/login', authController.loginUser);
router.post('/user/logout', authController.logoutUser);

export default router;
