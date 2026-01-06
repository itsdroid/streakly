import express from 'express';
const router = express.Router();
import { registerUser, loginUser, logoutUser } from '../controllers/authController.js';

// ----- user auth APIs -----
router.post('/user/register', registerUser);
router.post('/user/login', loginUser);
router.post('/user/logout', logoutUser);

export default router;
