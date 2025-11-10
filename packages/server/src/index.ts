// src/index.ts
import express, { Request, Response } from "express";
import { connect } from "./services/mongo";
import Teams from "./services/team-svc";

const app = express();
const port = process.env.PORT || 3000;
const staticDir = process.env.STATIC || "public";

app.use(express.static(staticDir));

// replace the hello with this
app.get("/teams/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  Teams.get(id).then((data) => {
    if (data) res
      .set("Content-Type", "application/json")
      .send(JSON.stringify(data));
    else res
      .status(404).send();
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

connect("football");