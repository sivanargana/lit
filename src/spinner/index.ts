 
import { html } from "lit";
import { customElement } from "lit/decorators.js";
import componentCss from "./style";
import { Host } from "../host";
@customElement("msr-spinner")
export class Spinner extends Host {
  static msrStyles = [componentCss];
  render() { 
    return html`
    <div class="spinner"></div>  
    `;
  }
}
