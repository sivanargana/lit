import { LitElement, html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { when } from "lit/directives/when.js";
import css from "./button.style";
@customElement("sn-button")
export class Button extends LitElement {
  @state()
  private hasPrefixSlot = false;
  private hasSuffixSlot = false;
  static styles =  css
  @property()
  label?: string;
  @property()
  variant: "primary" | "default" | "dashed" | "text" | "link" = "default";
  @property()
  size: "medium" | "small" | "large" = "medium";
  @property()
  shape: "round" | "circle" | "pill" = "round";
  @property()
  prefix: any;
  @property()
  suffix: any;
  @property({ type: Boolean, reflect: true }) block = false;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true }) loading = false;
  private variantClass(): string {
    switch (this.variant) {
      case "primary":
        return "btn--primary";
      case "dashed":
        return "btn--dashed";
      case "text":
        return "btn--text";
      case "link":
        return "btn--link";
      default:
        return "btn--default";
    }
  }
  private sizeClass(): string {
    switch (this.size) {
      case "large":
        return "btn--large";
      case "small":
        return "btn--small";
      default:
        return "btn--medium";
    }
  }
  private shapeClass(): string {
    switch (this.shape) {
      case "circle":
        return "btn--circle";
      case "pill":
        return "btn--pill";
      default:
        return "btn--round";
    }
  }
  render() {
    return html`
      <button class="btn ${this.variantClass()} ${this.sizeClass()} ${this.shapeClass()} ${this.block ? 'btn--block': ''}" ?disabled=${this.disabled}>
        <span class="btn__prefix ${this.prefix || this.hasPrefixSlot ? "active" : nothing}"
          ><slot
            name="prefix"
            @slotchange=${(e: any) => {
              this.hasPrefixSlot = e.target.assignedNodes().length > 0;
            }}
            >${this.prefix}</slot
          ></span
        >
        ${when(
          this.shape == "circle",
          () => html`<span class="btn__icon"><slot></slot></span>`,
          () => html`<span class="btn__label">${this.label}<slot></slot></span>`
        )}
        <span class="btn__suffix ${this.suffix || this.hasSuffixSlot ? "active" : nothing}"
          ><slot
            name="suffix"
            @slotchange=${(e: any) => {
              this.hasSuffixSlot = e.target.assignedNodes().length > 0;
            }}
            >${this.suffix}</slot
          ></span
        >
      </button>
    `;
  }
}
