import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js';

const connectDB = async () => {
    try {
       const connectionInstance =  await mongoose.connect(
            `${process.env.MONGO_DB}/${DB_NAME}`
        );
        console.log(` MongoDb is connected !! DB Host : ${connectionInstance.connection.host}`);

    
    } catch (error) {
        console.log("MongoDB connection error", error);
        process.exit(1)
    }
}

export default connectDB