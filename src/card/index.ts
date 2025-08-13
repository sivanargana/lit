 
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import hostCss from "../host/style";
import componentCss from "./style";
@customElement("msr-card")
export class Card extends LitElement {
  static styles = [hostCss,componentCss];
  render() { 
    return html`
    <div class="card">
    <slot class="card__image" name="image"></slot>
    <slot class="card__header" name="header"></slot>
    <slot class="card__body"></slot>
    <slot class="card__footer" name="footer"></slot>
    </div>  
    `;
  }
}
