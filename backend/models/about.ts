import mongoose, { Schema } from "mongoose";

const aboutSchema = new Schema(
  {
    displayName: String,
    desc: String,
    fullName: String,
    nickname: String,
    age: Number,
    birthday: String,
    sex: String,
    nationality: String,
    status: String,
    languages: String,
  },
  {
    timestamps: true,
  },
);

const About = mongoose.models.About || mongoose.model("About", aboutSchema);

export default About;
