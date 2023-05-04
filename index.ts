import "./style.css";
import { LitElement, html, customElement } from "lit-element";

import "@material/mwc-textfield/mwc-textfield.js";
import { TextField } from "@material/mwc-textfield/mwc-textfield.js";

import {
  maxLength,
  required,
  forbidden,
  min,
  max,
  validate,
  ValidationResult,
} from "./lib";

@customElement("my-element")
export class MyElement extends LitElement {
  textfield!: TextField;

  firstUpdated() {
    this.textfield = this.shadowRoot!.querySelector("mwc-textfield")!;
  }

  render() {
    return html`<div>
      <mwc-textfield label="My Textfield"></mwc-textfield>
      <button @click=${() => this.handleClick()}>Click</button>
    </div> `;
  }

  handleClick() {
    const result: ValidationResult = validate(this.textfield.value, [
      //   minLength(5),
      maxLength(10),
      // regex(/^[a-z]+$/g),
      required(),
      forbidden(["hello"]),
      min(50),
      max(100),
    ]);

    this.textfield.setCustomValidity(result.valid ? "" : result.messages[0]);
    this.textfield.reportValidity();
  }
}
