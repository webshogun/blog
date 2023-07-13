import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import authRoute from './routes/auth.js';

const app = express();
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoute);

async function start() {
	try {
		await mongoose.connect(
			`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.38bz2pv.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
		);
		app.listen(process.env.PORT, () => console.log('Server started'));
	} catch (error) {
		console.log(error);
	}
}

start();
