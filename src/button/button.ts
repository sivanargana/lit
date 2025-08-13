import { LitElement, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { html, literal } from "lit/static-html.js";
import css from "./button.style";
@customElement("msr-button")
export class Button extends LitElement {
  static styles = css;
  @state() private hasPrefix = false;
  @state() private hasSuffix = false;
  @state() private hasLabel = false;
  @property() href = '';
  @property({ reflect: true }) variant: 'default' | 'primary' | 'success' | 'neutral' | 'warning' | 'danger' | 'text' = 'default';
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true }) loading = false;
  @property({ type: Boolean, reflect: true }) outline = false;
  @property({ type: Boolean, reflect: true }) pill = false;
  @property({ type: Boolean, reflect: true }) circle = false;
  @property() download?: string;
  @property() type: 'button' | 'submit' | 'reset' = 'button';
  @property() target?: '_blank' | '_parent' | '_self' | '_top';
  checkSlot(e: any) {
    return e.target.assignedNodes({ flatten: true }).length > 0;
  }
  render() {
    const tag = this.href ? literal`a` : literal`button`;
    return html`
      <${tag}
      class=${classMap({
      'btn': true,
      'btn--default': this.variant === 'default',
      'btn--primary': this.variant === 'primary',
      'btn--success': this.variant === 'success',
      'btn--neutral': this.variant === 'neutral',
      'btn--warning': this.variant === 'warning',
      'btn--danger': this.variant === 'danger',
      'btn--text': this.variant === 'text',
      'btn--small': this.size === 'small',
      'btn--medium': this.size === 'medium',
      'btn--large': this.size === 'large',
      'btn--circle': this.circle,
      'btn--disabled': this.disabled,
      'btn--loading': this.loading,
      'btn--outline': this.outline,
      'btn--pill': this.pill,
      'btn--has-prefix': this.hasPrefix,
      'btn--has-suffix': this.hasSuffix,
      'btn--has-label': this.hasLabel,
    })}
    ?disabled=${ifDefined(this.href ? undefined : this.disabled)}
    type=${ifDefined(this.href ? undefined : this.type)}
    href=${ifDefined(this.href ? this.href : undefined)}
    target=${ifDefined(this.href ? this.target : undefined)}
         download=${ifDefined(this.href ? this.download : undefined)}
      ><slot name="prefix" class="btn__prefix" @slotchange=${(e: any) => this.hasPrefix = this.checkSlot(e)}></slot>
        <slot class="btn__label" @slotchange=${(e: any) => this.hasLabel = this.checkSlot(e)}></slot>
        <slot name="suffix" class="btn__suffix" @slotchange=${(e: any) => this.hasSuffix = this.checkSlot(e)}></slot>
         ${this.loading ? html`💡` : nothing}
       </${tag}>
    `;
  }
}
