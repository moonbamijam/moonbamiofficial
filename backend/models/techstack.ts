import mongoose, { Schema } from "mongoose";

const techStackSchema = new Schema(
  {
    ariaLabel: String,
    href: String,
    src: String,
    alt: String,
  },
  {
    timestamps: true,
  },
);

const TechStack =
  mongoose.models.TechStack || mongoose.model("TechStack", techStackSchema);

export default TechStack;
