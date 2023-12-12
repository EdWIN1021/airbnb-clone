import { Schema, model, models, Document } from "mongoose";

export interface IDetail extends Document {
  title: string;
  stars: number;
  reviewCount: number;
  address: string;
  image_urls: string[];
}

const detailSchema = new Schema<IDetail>({
  title: { type: String, required: true },
  stars: { type: Number, require: true },
  reviewCount: { type: Number, require: true },
  address: { type: String, required: true },
  image_urls: { type: [String], required: true },
});

export default models.Detail || model<IDetail>("Detail", detailSchema);
