// db.js

import mongoose from "mongoose";

const connectDB = async () => {

    console.log('process.env.DB_NAME ==> ', process.env.DB_NAME);

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: process.env.DB_NAME,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }

};

export default connectDB;
