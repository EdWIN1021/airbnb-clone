import { Schema, model, models, Document } from "mongoose";
import { IListing } from "./Listing";

export interface IDetail extends Document {
  title: string;
  stars: number;
  reviewCount: number;
  address: string;
  image_urls: string[];
  listingId: IListing;
}

const detailSchema = new Schema<IDetail>({
  title: { type: String, required: true },
  stars: { type: Number, require: true },
  reviewCount: { type: Number, require: true },
  address: { type: String, required: true },
  image_urls: { type: [String], required: true },
  listingId: {
    type: Schema.ObjectId,
    ref: "Listing",
  },
});

export default models.Detail || model<IDetail>("Detail", detailSchema);
