import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('sn-input')
export class SnInput extends LitElement {
 
 
 
 
  render() {
    return html`
     <slot name="label"></slot>
    <input name="input" type="text" />
    <slot name="help-text"></slot>
    
    `;
  }
}
