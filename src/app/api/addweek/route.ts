import connectDB from "../../../../config/database"
import Tracks from "../../../../models/Time"
export const POST = async (req:Request) =>{
    try {
       await connectDB()
       const data = await req.json()
       console.log(data)
       const foundTrack = await Tracks.findOne({week:data.week})
       console.log(foundTrack)
       if(!foundTrack){
       const newTrack = new Tracks(data)
       console.log(newTrack)
       await newTrack.save()
       return new Response(JSON.stringify(newTrack),{status:201})
       }else{
         return new Response(JSON.stringify(foundTrack),{status:200})
       }
    } catch (error) {
       console.log(error) 
    }
}