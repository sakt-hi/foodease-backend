import mongoose from "mongoose";

export const connectDb = async ()=>{
    await
    mongoose.connect('mongodb+srv://sakthi:265sakthi@cluster0.uoyii.mongodb.net/food-ease')
    .then(()=>{console.log('DB Connected');})
}