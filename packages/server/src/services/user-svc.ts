// src/services/user-svc.ts
import { Schema, model } from "mongoose";
import { User } from "../models/user";

const userSchema = new Schema<User>({
  userid: { type: String, required: true },
  name: { type: String, required: true },
  city: { type: String, required: true },
  favoriteTeam: { type: String, required: true },
},
{ collection: "users" });

const UserModel = model<User>("User", userSchema);

function index(): Promise<User[]> {
  return UserModel.find();
}

function get(userid: String): Promise<User> {
  return UserModel.find({ userid })
    .then((list) => list[0])
    .catch((err) => {
      throw `${userid} Not Found`;
    });
}

export default { index, get };