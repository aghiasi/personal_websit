import { Schema, model, models } from "mongoose";
const subject = new Schema({
  name: {
    type: String,
  },
  hours: {
    type: Number,
  },
  test: {
    type: Number,
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
    type: Number,
    default: 0,
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
    type: Number,
    default: 0,
  },
});
weeksSchema.pre("save", function (next) {
  this.studys.map((item) => {
    if (item.day_total_hours) {
      this.totalHours += item.day_total_hours;
    }
    if (item.day_total_test) {
      this.totalTest += item.day_total_test;
    }
  });
  next();
});
const Tracks = models.Tracks || model("Tracks", weeksSchema);
export default Tracks;
