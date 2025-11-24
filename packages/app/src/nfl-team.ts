import { LitElement, html, css } from "lit";
import { property } from "lit/decorators.js";

export class NFLTeam extends LitElement {
    @property() name?: string;
    @property() logo?: string;
    @property() website?: string;

    static styles = css`
    :host {
      text-align: center;
    }
  `;

    render() {
        return html`
            <link rel="stylesheet" href="/styles/tokens.css">
            <link rel="stylesheet" href="/styles/page.css">
            <link rel="stylesheet" href="/styles/reset.css">
            <a href=${this.website ?? ""}>
                <img src=${this.logo ?? ""} alt=${this.name ?? "Team logo"}>
                <span>${this.name}</span>
            </a>`;
    }

}

customElements.define("nfl-team", NFLTeam);