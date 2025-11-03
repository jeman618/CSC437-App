// src/destination.ts
import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import reset from "./styles/reset.css.ts";

export class DestinationElement extends LitElement {
    @property({type : String}) name = "Wonderer";
  override render() {
    return html`
      <h2>Welcome, ${this.name}!</h2>
      <p>This is your Lit domain.</p>
    `;
  }

  static styles = [
    reset.styles,
    css`
        h2, p {
            text-align: left;
        }
    `
  ]
}