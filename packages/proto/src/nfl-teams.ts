import { LitElement, html } from "lit";
import { property, state } from "lit/decorators.js";

interface Team {
    name: string;
    logo: string;
    website: string;
}

export class NFLTeam extends LitElement {
    @property() src?: string;
    @state() teams: Team[] = [];

    render() {
        html`
        <template>
            <link rel="stylesheet" href="/styles/tokens.css">
            <link rel="stylesheet" href="/styles/page.css">
            <link rel="stylesheet" href="/styles/reset.css">
            <a id="link">
                <img id="logo" alt="">
                <span id="name"></span>
            </a>
        </template>  
    `;
    }

    hydrate(src: string) {
        fetch(src)
        .then(res => res.json())
        .then((json: object) => {
        if(json) {
            // store the data as @state
        }
        })
    }

    connectedCallback() {
        super.connectedCallback();
        if (this.src) {
            this.hydrate(this.src);
        }
  }

}

customElements.define("nfl-team", NFLTeam);