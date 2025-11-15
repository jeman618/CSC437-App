// src/routes/teams.ts
import express, { Request, Response } from "express";
import { Division, Team } from "../models/team";
import Teams from "../services/team-svc";

const router = express.Router();

router.get("/", (_, res: Response) => {
  Teams.index()
    .then((list) => res.json(list))
    .catch((err) => res.status(500).send(err));
});

router.get("/api/teams/team/:name", async (req: Request, res: Response) => {
  const { name } = req.params;

  try {
    const team = await Teams.getTeamByName(name);

    if (!team) return res.status(404).json({ error: "Team not found" });

    res.json(team);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/api/teams/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const division = await Teams.getById(id);

    if (!division) return res.status(404).send("Division not found");

    res.json(division);
  } catch {
    res.status(500).send("Error finding division");
  }
});

router.post("/", (req: Request, res: Response) => {
  const newDivision = req.body;

Teams.create(newDivision)
  .then((division: Division) =>
    res.status(201).json(division)
  )
  .catch((err) => res.status(500).send(err));
});

router.put("/:name", (req: Request, res: Response) => {
  const { name } = req.params;
  const newTeam = req.body;

  Teams.update(
    name,
    newTeam.logo,
    newTeam.website,
  )
    .then((updatedTeam: Team) => res.json(updatedTeam))
    .catch((err) => res.status(500).send(err));
});

router.delete("/:userid", (req: Request, res: Response) => {
  const { name } = req.params;

  Teams.remove(name)
    .then(() => res.status(204).end())
    .catch((err) => res.status(404).send(err));
});

export default router;