"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var team_svc_exports = {};
__export(team_svc_exports, {
  default: () => team_svc_default
});
module.exports = __toCommonJS(team_svc_exports);
var import_mongoose = require("mongoose");
const teamSchema = new import_mongoose.Schema(
  {
    team: [
      {
        name: { type: String, required: true },
        logo: { type: String, required: true },
        website: { type: String, required: true }
      }
    ]
  },
  { collection: "teams" }
);
const TeamModel = (0, import_mongoose.model)("teams", teamSchema);
function index() {
  return TeamModel.find();
}
function getById(id) {
  return TeamModel.findById(id).catch((err) => {
    throw `${id} Not Found`;
  });
}
async function getTeamByName(name) {
  const division = await TeamModel.findOne({ "team.name": name });
  if (!division) return null;
  const team = division.team.find((t) => t.name === name);
  return team || null;
}
function create(div) {
  const newDivision = new TeamModel(div);
  return newDivision.save();
}
function update(name, logo, website) {
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
    }
  ).then((updated) => {
    if (!updated) throw `${name} not updated`;
    else return updated;
  });
}
function remove(name) {
  return TeamModel.findOneAndDelete(
    {},
    { $pull: { team: { name } } }
  ).then(
    (deleted) => {
      if (!deleted) throw `${name} not deleted`;
    }
  );
}
var team_svc_default = { index, getById, getTeamByName, create, update, remove };
