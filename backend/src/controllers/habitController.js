import Habit from "../models/HabitModel.js";

export const createHabit = async (req, res) => {
    try {
        const { title, userId } = req.body;

        const habit = await Habit.create({
            title,
            user: userId, // later replace with req.user.id
            records: [],
        });

        res.status(201).json(habit);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
