

import { LitElement } from "lit";
import hostCss from "./style";
export class Host extends LitElement {
  static msrStyles: any = [];
  static get styles() {
    return [hostCss, ...this.msrStyles];
  }
}
