// src/services/team-svc.ts
import { Schema, model } from "mongoose";
import { Division, Team } from "../models/team";

const teamSchema = new Schema({
  team : [
    {
      name: { type: String, required: true },
      logo: { type: String, required: true },
      website: { type: String, required: true }
    }
  ]
},
{ collection: "teams" });

const TeamModel = model<Division>("teams", teamSchema);

function index(): Promise<Division[]> {
  return TeamModel.find();
}

function getById(id : String): Promise<Division | null> {
  return TeamModel.findById(id)
    .catch((err) => {
      throw `${id} Not Found`;
    });
}

async function getTeamByName(name: String): Promise<Team | null> {
  const division = await TeamModel.findOne({ "team.name": name });
  if (!division) return null;

  // Find the matching team inside the array
  const team = division.team.find(t => t.name === name);
  return team || null;
}

function create(div: Division): Promise<Division> {
  const newDivision = new TeamModel(div);
  return newDivision.save();
}

function update(
  name: String,
  logo: String,
  website: String,
): Promise<Team> {
  return TeamModel.findOneAndUpdate(
    { "team.name": name }, 
    { 
      $set: {
      "team.$.logo": logo, 
      "team.$.website": website
    }
  },
    {
      new: true
    }).then((updated) => {
    if (!updated) throw `${name} not updated`;
    else return updated as unknown as Team;
  });
}

function remove(name: String): Promise<void> {
  return TeamModel.findOneAndDelete({},
    { $pull: {team: { name }}})
    .then(
    (deleted) => {
      if (!deleted) throw `${name} not deleted`;
    }
  );
}

export default { index, getById, getTeamByName, create, update, remove };