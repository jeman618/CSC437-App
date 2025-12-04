import { Auth } from "@calpoly/mustang";
import { Team } from "server/models";

export function requestTeam(
  payload: { teamid: string },
  user: Auth.User
) {
  return fetch(`/api/teams/${payload.teamid}`, {
    headers: Auth.headers(user)
  })
    .then((response: Response) => {
      if (response.status === 200) return response.json();
      throw "No Response from server";
    })
    .then((json: unknown) => {
      if (json){
         return json as Team
      }
      throw "No JSON in response from server";
    });
}

export function saveTeam(
  payload: { teamid: string; team: Team },
  user: Auth.User
): Promise<Team> {
  return fetch(`/api/teams/${payload.teamid}`, {
    method: "PUT",
    headers: {
      ...Auth.headers(user),
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload.team)
  })
    .then((res) => {
      if (res.status === 200) return res.json();
      throw new Error("Team save failed");
    })
    .then((json) => json as Team);
}
