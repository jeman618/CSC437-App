// app/src/messages.ts
import { Team } from "server/models";

export type Msg =
  | ["team/save", { teamid: string; team: Team },
    {
      onSuccess?: () => void;
      onFailure?: (err: Error) => void;
    }
  ]
  | ["team/request", { teamid: string }]
  | Cmd
  ;

type Cmd =
  | ["team/load", {teamid: string, team: Team}]