import { LitElement, css, html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { when } from "lit/directives/when.js";
@customElement("sn-button")
export class Button extends LitElement {
  @state()
  private hasPrefixSlot = false;
  private hasSuffixSlot = false;
  static styles = css`
    :host {
      display: inline-block;
      vertical-align: top;
    }
    .btn {
      display: inline-flex;
      align-items: center;
      border: 1px solid transparent;
      padding: 0px;
      background-color: transparent;
    }
    .btn.btn--medium {
      min-height: 2rem;
    }
    .btn.btn--small {
      min-height: 1.5rem;
    }
    .btn.btn--large {
      min-height: 2.5rem;
    }
    .btn.btn--default {
      background-color: var(--foreground);
      border-color: var(--border);
    }
    .btn.btn--dashed {
      background-color: var(--foreground);
      border-color: var(--border);
      border-style: dashed;
    }
    .btn.btn--primary {
      border-color: var(--primary);
      background-color: var(--primary);
      color: var(--foreground);
    }
    .btn.btn--link {
      color: var(--primary);
    }
    .btn__label {
      display: inline-block;
    }
    .btn.btn--small .btn__label {
      padding: 0px 0.75rem;
    }
    .btn.btn--medium .btn__label {
      padding: 0px 1rem;
    }
    .btn.btn--large .btn__label {
      padding: 0px 1.25rem;
    }
    .btn.btn--pill {
      border-radius: 9999rem;
    }
    .btn.btn--small.btn--round {
      border-radius: 0.25rem;
    }
    .btn.btn--medium.btn--round {
      border-radius: 0.25rem;
    }
    .btn.btn--large.btn--round {
      border-radius: 0.25rem;
    }
    .btn.btn--circle {
      border-radius: 9999rem;
      justify-content: center;
    }
    .btn.btn--medium.btn--circle {
      min-width: 2rem;
    }
    .btn.btn--small.btn--circle {
      min-width: 1.5rem;
    }
    .btn.btn--large.btn--circle {
      min-width: 2.5rem;
    }
    .btn .btn__prefix.active,
    .btn .btn__suffix.active {
      display: block;
    }
    .btn .btn__prefix {
      margin-left: 10px;
      display: none;
    }
    .btn .btn__suffix {
      margin-right: 10px;
      display: none;
    }
  `;
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
      <button class="btn ${this.variantClass()} ${this.sizeClass()} ${this.shapeClass()}">
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
