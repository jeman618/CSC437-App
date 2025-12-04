// src/index.ts
import express, { Request, Response } from "express";
import { connect } from "../services/mongo";
import auth, { authenticateUser } from "../routes/auth";
import Teams from "../services/team-svc";
import Team from "../routes/teams";
import fs from "node:fs/promises";
import path from "path";
export * from "./team";
export * from "./credential";

connect("football");

const app = express();
const port = process.env.PORT || 3000;
const staticDir = process.env.STATIC || "public";

app.use(express.json());
app.use("/api/teams", authenticateUser, Team);
app.use("/api/auth", auth);
app.use(express.static(staticDir));

app.use("/app", (req: Request, res: Response) => {
  const indexHtml = path.resolve(staticDir, "index.html");
  fs.readFile(indexHtml, { encoding: "utf8" }).then((html) =>
    res.send(html)
  );
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});