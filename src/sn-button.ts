import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js'; 
@customElement('sn-button')
export class SnButton extends LitElement {
  static styles = css`
   :host{
     
   }
  .btn{
  border:1px solid transparent;
  padding:0px;
  background-color:transparent;
  }
  .btn.btn--medium{
  min-height:2.5rem;
  border-radius:0.25rem;
  }
  .btn.btn--small{
  min-height:1.875rem;
  border-radius:0.25rem;
  }
  .btn.btn--large{
  min-height:3.125rem;
  border-radius:0.25rem;
  }
  .btn.btn--outlined{
  border-color:red;
  }
  .btn.btn--dashed{
  border-color:red;
  border-style:dashed;
  }
  .btn.btn--filled{
  border-color:red;
  background-color:red;
  }
  .btn__label{
  display:inline-block;

  }
   .btn.btn--small .btn__label{
     padding:0px 0.75rem;
   }
   .btn.btn--medium .btn__label{
     padding:0px 1rem;
   }
   .btn.btn--large .btn__label{
     padding:0px 1.25rem;
   }
  `;

   

  @property()
  variant: 'filled' | 'outlined' | 'dashed' | 'text' | 'link' = 'outlined';

  @property()
  size: 'medium' | 'small' | 'large'  = 'medium';


     private variantClass(): string {
    switch (this.variant) {
      case 'filled':
        return 'btn--filled';
      case 'dashed':
        return 'btn--dashed';
      case 'text':
        return 'btn--text';
      case 'link':
        return 'btn--link';
      default:
        return 'btn--outlined';
    }
  }
     private sizeClass(): string {
    switch (this.size) {
      case 'large':
        return 'btn--large';
      case 'small':
        return 'btn--small';
      default:
        return 'btn--medium';
    }
  }
  render() {

    return html`
    <button class="btn ${this.variantClass()} ${this.sizeClass()}"><slot class="btn__label"></slot></button>
    `;
  }
}
