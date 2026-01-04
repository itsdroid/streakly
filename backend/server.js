
import express from 'express';
const app = express();
import connectDB from './src/config/db.js';
import dotenv from 'dotenv';

dotenv.config();

app.use(express.json());

// Connect to the database
connectDB();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
