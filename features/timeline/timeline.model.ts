import mongoose, { Schema } from "mongoose";

const timelineSchema = new Schema(
  {
    date: String,
    type: String,
    note: String,
    message: String,
  },
  {
    timestamps: true,
  },
);

const Timeline =
  mongoose.models.Timeline || mongoose.model("Timeline", timelineSchema);

export default Timeline;
