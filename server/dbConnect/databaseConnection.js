import mongoose from "mongoose";
import 'dotenv/config';

async function databaseConnection(){
    try{
        await mongoose.connect(process.env.Mongo_URL);
        console.log("Connected to MongoDB");
    }catch(err){
        console.error("Error connecting to MongoDB:", err.message);
        process.exit(1);
    }
}

export  {databaseConnection}