 
import {  html } from "lit";
import { customElement, state } from "lit/decorators.js"; 
import componentCss from "./style";
import { classMap } from "lit/directives/class-map.js";
import { Host } from "../host";
@customElement("msr-card")
export class Card extends Host {
  static msrStyles = [componentCss];
  @state() private hasHeader = false;
  render() { 
    return html`
    <div class=${classMap({
      'card':true,
      "card--has-header":this.hasHeader
    })}>
    <slot class="card__image" name="image"></slot>
    <slot class="card__header" name="header" @slotchange=${(e:any)=>this.hasHeader = e.target.assignedNodes({ flatten: true }).length > 0}></slot>
    <slot class="card__body"></slot>
    <slot class="card__footer" name="footer"></slot>
    </div>  
    `;
  }
}
