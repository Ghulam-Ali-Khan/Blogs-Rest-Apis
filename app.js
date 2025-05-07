// app.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import routes from './routes/index.js';
import errorHandlerMiddleware from './middlewares/errorHandlerMiddleware.js';

// import errorHandler from './middlewares/errorHandler.js';

dotenv.config(); // Load environment variables

// Connect to database
connectDB();

// Create express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.use('/api', routes);  // All API routes prefixed with /api

// Error handling middleware
app.use(errorHandlerMiddleware);

export default app;
