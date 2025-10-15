import mongoose  from "mongoose";
export const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mongodb connected successfully");
    }
    catch(err){
        console.log(" db not connected",err.message);
        process.exit(1);
    }
}