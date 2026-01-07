import HabitModel from '../models/HabitModel';

export async function createHabit(req, res) {
    try {
        const { userId, user, title, frequency, records } = req.body;

        const Habit = await HabitModel.create({
            user: userId,
            title,
            frequency,
            records
        });
        res.status(201).json({ message: " habit created " });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}