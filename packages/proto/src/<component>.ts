import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import reset from "./styles/reset.css.ts";

export class TestElement extends LitElement {
    @property({type : String}) name = "Wonderer";
  override render() {
    return html`
      <h2>Welcome, ${this.name}!</h2>
    `;
  }

  static styles = [
    reset.styles,
    css`
        h2 {
            text-align: left;
        }
    `
  ]
}