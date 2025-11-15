import { html, state } from "lit";
import { Observer } from "@calpoly/mustang";
import { Auth } from "@calpoly/mustang";

export class HeaderElement extends HTMLElement {
  _authObserver = new Observer<Auth.Model>(this, "football:auth");

  @state()
  loggedIn = false;

  @state()
  userid = undefined;

  connectedCallback() {
    super.connectedCallback();
    this._authObserver.observe((auth) => {
      const { user } = auth;

      if (user && user.authenticated) {
        this.loggedIn = true;
        this.userid = user.username;
      } else {
        this.loggedIn = false;
        this.userid = undefined;
      }
    });
  }

  renderSignOutButton() {
    return html`
      <button
        @click=${(e) => {
          Events.relay(e, "auth:message", ["auth/signout"]);
        }}
      >
        Sign Out
      </button>
    `;
  }

  renderSignInButton() {
    return html`
      <a href="/login.html">
      Sign In…
      </a>
    `;
  }

  render() {
    return html`
      <header>
        <a slot="actuator">Hello, ${this.userid || "traveler"}</a>
        ${this.loggedIn
          ? this.renderSignOutButton()
          : this.renderSignInButton()}
      </header>
    `;
  }
}
