import { Schema, model, models, Document } from "mongoose";

export interface IListing extends Document {
  name: string;
  title: string;
  rating: number;
  number_of_beds: number;
  number_of_reviews: number;
  price: number;
  image_url: string;
}

const listingSchema = new Schema<IListing>({
  name: { type: String, required: true },
  title: { type: String, required: true },
  rating: { type: Number, required: true, default: 0 },
  number_of_beds: { type: Number, required: true, default: 0 },
  number_of_reviews: { type: Number, required: true, default: 0 },
  price: { type: Number, required: true, default: 0 },
  image_url: { type: String, required: true },
});

export default models.Listing || model<IListing>("Listing", listingSchema);
