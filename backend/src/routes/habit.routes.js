import express from 'express';
const router = express.Router();
import { createHabit } from '../controllers/habitController';

router.post('/createHabit', createHabit);


export default router;