import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://khaibtros:9taolaymay0Z@cluster0.g38kb.mongodb.net/Food_Delivery').then(()=>console.log("DB connected"))
}