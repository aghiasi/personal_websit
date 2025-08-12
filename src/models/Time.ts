import { Schema, model, models } from "mongoose";
const subject = new Schema({
  name: {
    type: String,
  },
  hours: {
    type: String,
  },
  test: {
    type: Number,
    default: 0,
  },
});
const trackSchema = new Schema({
  day: {
    type: String,
  },
  subjects: [subject],
  day_total_test: {
    type: Number,
    default: 0,
  },
  day_total_hours: {
    type: Schema.Types.Decimal128,
    default: 0.0,
  },
});
const weeksSchema = new Schema({
  week: {
    type: String,
    require,
  },
  studys: {
    type: [trackSchema],
  },
  totalTest: {
    type: Number,
    default: 0,
  },
  totalHours: {
    type: Schema.Types.Decimal128,
    default: 0.0,
  },
  totalGraph:{
    type:[subject],
    default:[]
  }
});
weeksSchema.pre("findOneAndUpdate", async function (next) {
  const update = await this.model.findOne(this.getQuery());
  next();
});
const Tracks = models.Tracks || model("Tracks", weeksSchema);
export default Tracks;
