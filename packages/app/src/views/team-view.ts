import {define, View } from "@calpoly/mustang";
import { LitElement, html, css } from "lit";
import { property, state } from "lit/decorators.js";
import { Msg } from "../messages";
import { Model } from "../model";
import { Team } from "server/models";



export class DivisionViewElement extends View<Model, Msg> {
  @property({ attribute: "team-name" }) teamName?: string;
  @state() teams: Team[] = [];

  get src() {
    return `data/${this.teamName}.json`;
  }

  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    super.attributeChangedCallback(name, oldValue, newValue);

    if (name === "user-id" && newValue !== oldValue) {
      this.dispatchMessage([
        "team/request",
        { teamid: newValue }
      ]);
    }
  }

  render() {
    const { teams } = this;

    function renderTeam(team: Team) {
        return html`
        <nfl-team
            name=${team.name}
            logo=${team.logo}
            website=${team.website}
        ></nfl-team>
        `;
    }

    return html`
    <link rel="stylesheet" href="/styles/tokens.css">
    <link rel="stylesheet" href="/styles/page.css">
    <link rel="stylesheet" href="/styles/reset.css">
    <dl>
        ${teams.map((team) => html`<dt>${renderTeam(team)}</dt>`)}
    </dl>
    `;
  }
}

customElements.define("team-view", DivisionViewElement);