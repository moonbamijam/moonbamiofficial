import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema(
  {
    image: {
      data: Buffer,
      contentType: String
    },
    title: String,
    desc: String,
    href: String,
  }, {
    timestamps: true,
  }
);

const Project = mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;