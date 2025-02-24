import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema(
  {
    src: String,
    alt: String,
    title: String,
    desc: String,
    website: String,
    github: String,
    slug: String,
  },
  {
    timestamps: true,
  },
);

const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;
