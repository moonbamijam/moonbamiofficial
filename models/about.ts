import mongoose, { Schema } from "mongoose";

const aboutSchema = new Schema(
  {
    image: {
      data: Buffer,
      contentType: String
    },
    title: String,
    desc: String,
    name: String,
    nickname: String,
    age: Number,
    birthday: String,
    sex: String,
    nationality: String,
    status: String,
    languages: String
  }, {
    timestamps: true,
  }
);

const About = mongoose.models.About || mongoose.model("About", aboutSchema);

export default About;