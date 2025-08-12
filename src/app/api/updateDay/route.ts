import connectDB from "../../../config/database";
import Tracks from "../../../models/Time";
import { formater } from "../../../libs/timeFormater";
export const POST = async (req: Request) => {
  const data = await req.json();
  await connectDB();
  const findOne = await Tracks.findOne({ week: data.week });
  if (findOne && findOne.studys) {
    const totalHours =
      parseFloat(findOne.totalHours) + parseFloat(data.data.hours);
    const dayHours = findOne.studys.filter((i: any) => i.day === data.day);
    const dayTotalHours =
      parseFloat(dayHours[0].day_total_hours) + parseFloat(data.data.hours);
    const newTotalHours = formater(totalHours);
    const newDayTotalHours = formater(dayTotalHours);
    let graph = findOne.totalGraph;
    const filtering = graph.find((i: any) => i.name == data.data.name);
    if (filtering) {
      filtering.test += data.data.test;
      const alltimer = parseFloat(filtering.hours) + parseFloat(data.data.hours);
      filtering.hours = formater(alltimer)
    } else {
      graph.push(data.data);
    }
    const updateData = await Tracks.findOneAndUpdate(
      { week: data.week },
      {
        $push: {
          "studys.$[study].subjects": data.data,
        },
        $set: {
          "studys.$[study].day_total_hours": newDayTotalHours
            ? newDayTotalHours
            : parseFloat(dayTotalHours.toFixed(2)),
          totalHours: newTotalHours
            ? newTotalHours
            : parseFloat(totalHours.toFixed(2)),
          totalGraph: graph,
        },
        $inc: {
          "studys.$[study].day_total_test": data.data.test,
          totalTest: data.data.test,
        },
      },
      { arrayFilters: [{ "study.day": data.day }], upsert: true }
    );
    if (updateData) updateData.save();
  }
  const newData = await Tracks.findOne({ week: data.week });
  console.log(newData.totalGraph);
  return new Response(JSON.stringify(newData), { status: 201 });
};
