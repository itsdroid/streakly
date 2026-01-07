import express from 'express';
const app = express();
import connectDB from './src/config/db.js';
import dotenv from 'dotenv';
import authRoutes from './src/routes/auth.routes.js';
import habitRoutes from './src/routes/habit.routes.js';
import User from './src/models/UserModel.js';
import cookieParser from 'cookie-parser';


dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Connect to the database
connectDB();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/analytics', (req,res) => {
    res.send('Analytics Data');
});


app.use('/' , authRoutes);
app.use('/habit', habitRoutes);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

