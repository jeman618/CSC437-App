// src/services/user-svc.ts
import { Schema, model } from "mongoose";
import { Team } from "../models/team";

const teamSchema = new Schema<Team>({
  name: { type: String, required: true },
  logo: { type: String, required: true },
  website: { type: String, required: true },
},
{ collection: "teams" });

const TeamModel = model<Team>("Team", teamSchema);

function index(): Promise<Team[]> {
  return TeamModel.find();
}

function get(name : String): Promise<Team> {
  return TeamModel.find({ name })
    .then((list) => list[0])
    .catch((err) => {
      throw `${name} Not Found`;
    });
}

export default { index, get };