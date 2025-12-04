// app/src/update.ts
import { Auth, ThenUpdate } from "@calpoly/mustang";
import { Msg } from "./messages";
import { Model } from "./model";
import { requestTeam, saveTeam } from "./services";

export default function update(
  message: Msg,
  model: Model,
  user: Auth.User
): Model | ThenUpdate<Model, Msg> {
  const [ tag, payload ] = message;

  switch (tag) {
    case "team/request": {
      const { teamid } = payload;

      return [
        { ...model, team: undefined },
          requestTeam(payload, user).then((team) => [
            "team/load", { teamid, team }
        ])
      ];
    }
    case "team/load": {
      const { team } = payload;
      return { ...model, team };
    }
    case "team/save": {
      return [
        model,
        saveTeam(payload, user)
        .then((team) => 
        [
          "team/load", { teamid: payload.teamid, team }
        ])
      ];
    }

    default:
      throw new Error(`Unhandled message tag: ${tag}`);
  }
}
