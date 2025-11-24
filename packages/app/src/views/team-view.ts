import { LitElement, html, css } from "lit";
import { property, state } from "lit/decorators.js";

interface Team {
  name: string;
  logo: string;
  website: string;
}

export class DivisionViewElement extends LitElement {
  @property({ attribute: "tean-name" }) teamName?: string;
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

  connectedCallback() {
    super.connectedCallback();
    if (this.teamName) this.hydrate(this.teamName);
  }

  load() {
    fetch(this.src)
    .then(res => res.json())
    .then((json: object) => {
      const data = json as { teams: Team[] };
      this.teams = data.teams;
    });
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
    <h2>Division: ${this.teamName}</h2>

      <dl>
        ${this.teams.map(
          (team) => html`
            <dt>
              <nfl-team
                name=${team.name}
                logo=${team.logo}
                website=${team.website}
              ></nfl-team>
            </dt>
          `
        )}
      </dl>
    `;
  }
}

customElements.define("team-view", DivisionViewElement);