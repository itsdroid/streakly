import HabitModel from '../models/HabitModel.js';

export async function createHabit(req, res) {
    try {
        const {  title, frequency, records } = req.body;

        const habit = await HabitModel.create({
            title,
            frequency,
        });
        res.status(201).json({ message: " habit created " ,habit });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}