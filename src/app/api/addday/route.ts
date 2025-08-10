import connectDB from "../../../../config/database";
import Tracks from "../../../../models/Time";
export const POST = async (req: Request) => {
  const data = await req.json();
  await connectDB();
  const find = await Tracks.findOne({
    week: data.week,
  });
  if (find) {
    const condition = find.studys.filter((i: any) => i.day === data.day);
    if (condition.length <= 0) {
      const updateData = await Tracks.findOneAndUpdate(
        { week: data.week },
        {
          $push: {
            studys: {
              day: data.day,
              subjects: [],
            },
          },
        }
      );
      if(updateData)
      updateData.save();
    }
    const newData = await Tracks.findOne({ week: data.week });
    return new Response(JSON.stringify(newData), { status: 201 });
  } else {
    return new Response(JSON.stringify(find), { status: 200 });
  }
};
