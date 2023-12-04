import { Schema, model, models, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  hashed_password?: string;
  image?: string;
  googleId?: string;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  hashed_password: { type: String },
  image: { type: String },
  googleId: { type: String },
});

export default models.User || model<IUser>("User", userSchema);
