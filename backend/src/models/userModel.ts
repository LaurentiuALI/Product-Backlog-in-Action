import mongoose, { Model } from "mongoose";
import bcrypt from "bcrypt";

const Schema = mongoose.Schema;

export interface IUser {
  _id: string;
  projectName: string;
  password: string;
}

interface IUserMethods {
  register(projectName: string, password: string): Promise<IUser>;
}

const userSchema = new Schema<IUser>({
  projectName: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.model("User", userSchema);
