import { LitElement, html, css } from "lit";
import { property, state } from "lit/decorators.js";

interface Team {
  name: string;
  logo: string;
  website: string;
}

export class NFLRoster extends LitElement {
  @property() src?: string;
  @state() teams: Team[] = [];

  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  connectedCallback() {
    super.connectedCallback();
    if (this.src) this.hydrate(this.src);
  }

  hydrate(src: string) {
    fetch(src)
    .then(res => res.json())
    .then((json: object) => {
      if(json) {
        const data = json as { teams: Team[] };
        this.teams = data.teams;
      }
    })
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

customElements.define("nfl-roster", NFLRoster);