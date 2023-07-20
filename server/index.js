import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import fileUpload from 'express-fileupload';

import authRoute from './routes/auth.js';
import postRoute from './routes/posts.js';

const app = express();
dotenv.config();

// Middleware
app.use(cors());
app.use(fileUpload());
app.use(express.json());
app.use(express.static('uploads'));

// Routes
app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);

async function start() {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.38bz2pv.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    );
    app.listen(process.env.PORT, () => console.log('Server started'));
  } catch (error) {
    console.log(error);
  }
}

start();
