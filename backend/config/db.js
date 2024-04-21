import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Rohit:Rohit$2001@cluster0.ctjp3n2.mongodb.net/food-delivery').then(()=>console.log("DB Connected"));
}