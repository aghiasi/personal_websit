
import connectDB from "../../../../config/database";
import Tracks from "../../../../models/Time";
export const POST = async (req: Request) => {
  const data = await req.json();
  console.log(data);
  await connectDB();
  const updateData = await Tracks.findOneAndUpdate(
    { week: data.week },
    {
      $push: {
        "studys": {
          day:data.day,
          subjects:[]
        },
      },
    },
  );
  updateData.save();
  const newData = await Tracks.findOne({week:data.week})
  return new Response(JSON.stringify(newData), { status: 201 });
};