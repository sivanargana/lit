import { css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import componentCss from "./style";
import { Host } from "../host";
import Prism from 'prismjs';
@customElement("msr-code")
export class Card extends Host {
  static msrStyles = [componentCss];
  @property() language:any = "markup";
  @property() code:any = "";
  firstUpdated() {
    const codeEl: any = this.shadowRoot?.querySelector('code');
    codeEl.innerHTML = Prism.highlight(
      this.code,
      Prism.languages[this.language],
      this.language
    );
  }
  render() {
    return html`
      <pre><code class="language-${this.language}"></code></pre>
    `;
  }
}
