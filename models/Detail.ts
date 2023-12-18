import { Schema, model, models, Document } from "mongoose";
import { IListing } from "./Listing";
import { IHost } from "./Host";

export interface IDetail extends Document {
  title: string;
  subTitle: string;
  stars: number;
  reviewCount: number;
  address: string;
  image_urls: string[];
  numOfBedRooms: number;
  numOfBeds: number;
  numOfGuests: number;
  numOfBath: number;
  listingId: IListing;
  host: IHost;
}

const detailSchema = new Schema<IDetail>({
  title: { type: String, required: true },
  subTitle: { type: String, required: true },
  stars: { type: Number, require: true },
  reviewCount: { type: Number, require: true },
  address: { type: String, required: true },
  image_urls: { type: [String], required: true },
  numOfBedRooms: { type: Number, require: true },
  numOfBeds: { type: Number, require: true },
  numOfGuests: { type: Number, require: true },
  numOfBath: { type: Number, require: true },
  listingId: {
    type: Schema.ObjectId,
    ref: "Listing",
  },
  host: {
    type: Schema.ObjectId,
    ref: "Host",
  },
});

export default models.Detail || model<IDetail>("Detail", detailSchema);
