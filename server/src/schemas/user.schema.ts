import { Document, Schema } from "mongoose";

export interface IUser extends Document {
  email: string;
  password: string;
  createdAt: Date;
}

const userSchema: Schema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export default userSchema;
