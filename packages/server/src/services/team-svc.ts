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

function get(id: String): Promise<Team> {
  return TeamModel.find({ id })
    .then((list) => list[0])
    .catch((err) => {
      throw `${id} Not Found`;
    });
}

export default { index, get };