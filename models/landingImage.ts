import mongoose, { Schema } from "mongoose";

const landingImageSchema = new Schema(
  {
    image: String,
    alt: String,
  },
  {
    timestamps: true,
  },
);

const LandingImage =
  mongoose.models.LandingImage ||
  mongoose.model("LandingImage", landingImageSchema);

export default LandingImage;
