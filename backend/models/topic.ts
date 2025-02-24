import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
  {
    title: String,
    desc: String,
  },
  {
    timestamps: true,
  },
);

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;
