// src/index.ts
import express, { Request, Response } from "express";
import { connect } from "./services/mongo";
import auth, { authenticateUser } from "./routes/auth";
import Teams from "./services/team-svc";
import Team from "./routes/teams";

connect("football");

const app = express();
const port = process.env.PORT || 3000;
const staticDir = process.env.STATIC || "public";

app.use(express.json());
app.use("/api/teams", authenticateUser,Team);
app.use("/api/auth", auth);
app.use(express.static(staticDir));

// replace the hello with this

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});