"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var teams_exports = {};
__export(teams_exports, {
  default: () => teams_default
});
module.exports = __toCommonJS(teams_exports);
var import_express = __toESM(require("express"));
var import_team_svc = __toESM(require("../services/team-svc"));
const router = import_express.default.Router();
router.get("/", (_, res) => {
  import_team_svc.default.index().then((list) => res.json(list)).catch((err) => res.status(500).send(err));
});
router.get("/api/teams/team/:name", async (req, res) => {
  const { name } = req.params;
  try {
    const team = await import_team_svc.default.getTeamByName(name);
    if (!team) return res.status(404).json({ error: "Team not found" });
    res.json(team);
  } catch (err) {
    res.status(500).send(err);
  }
});
router.get("/api/teams/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const division = await import_team_svc.default.getById(id);
    if (!division) return res.status(404).send("Division not found");
    res.json(division);
  } catch {
    res.status(500).send("Error finding division");
  }
});
router.post("/", (req, res) => {
  const newDivision = req.body;
  import_team_svc.default.create(newDivision).then(
    (division) => res.status(201).json(division)
  ).catch((err) => res.status(500).send(err));
});
router.put("/:name", (req, res) => {
  const { name } = req.params;
  const newTeam = req.body;
  import_team_svc.default.update(
    name,
    newTeam.logo,
    newTeam.website
  ).then((updatedTeam) => res.json(updatedTeam)).catch((err) => res.status(500).send(err));
});
router.delete("/:userid", (req, res) => {
  const { name } = req.params;
  import_team_svc.default.remove(name).then(() => res.status(204).end()).catch((err) => res.status(404).send(err));
});
var teams_default = router;
