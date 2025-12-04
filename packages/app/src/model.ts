// app/src/model.ts
import { Team, Credential } from "server/models";

export interface Model {
    team?: Team;
    user?: Credential;
}
