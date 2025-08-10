import mongoose from "mongoose"
export default async function connectDB() {
    if(mongoose.connections[0].readyState)return true ;
    try{
        if(process.env.MANGO_URL)
        await mongoose.connect(process.env.MANGO_URL)
        console.log("db connected")
        return true
    }catch(e){
        console.log(e)
    }
}