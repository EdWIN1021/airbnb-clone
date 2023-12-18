import { Schema, model, models, Document } from "mongoose";
import { IDetail } from "./Detail";

export interface IHost extends Document {
  name: string;
  startYear: number;
  detail: IDetail;
  photoUrl: string;
}

const hostSchema = new Schema<IHost>({
  name: { type: String, required: true },
  startYear: { type: Number, required: true },
  photoUrl: { type: String, required: true },
  detail: {
    type: Schema.ObjectId,
    ref: "Detail",
  },
});

export default models.Host || model<IHost>("Host", hostSchema);
