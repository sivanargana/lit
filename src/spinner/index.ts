 
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import hostCss from "../host/style";
import componentCss from "./style";
@customElement("msr-spinner")
export class Spinner extends LitElement {
  static styles = [hostCss,componentCss];
  render() { 
    return html`
    <div class="spinner"></div>  
    `;
  }
}
