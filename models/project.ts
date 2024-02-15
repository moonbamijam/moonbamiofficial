import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema(
  {
    src: String,
    projectTitle: String,
    projectDesc: String,
    href: String,
  }, {
    timestamps: true,
  }
);

const Project = mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;