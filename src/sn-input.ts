import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('sn-input')
export class SnInput extends LitElement {

  @state()
  private hasLabelSlot = false;
  private hasPrefixSlot = false;
  private hasSuffixSlot = false;
  private hasHelpTextSlot = false;

  static styles = css`

   :host{
   display:flex; 
   flex-direction:column;
   }
  :host .wrapper{
    display:flex;
    align-items:center;
    border:1px solid #ccc;
    padding:0px 10px;
  }
  :host .label{ 
    display:none;
  }
     :host .label.has{
     display:block;
     }
       :host .helptext{
           display:none;
           }
               :host .helptext.has{
           display:block;
           }
  :host .input{
   border:0px;
   flex:auto;
   height:38px;
  }
  `;
  @property()
  label?: string;

  @property({ attribute: "prefix" })
  _prefix?: string;

  @property({ attribute: "suffix" })
  _suffix?: string;



  @property({ attribute: "help-text", type: String })
  helpText?: string;



  render() {
    return html`
   
  <label part="label" for="input" class="label ${this.label || this.hasLabelSlot ? 'has' : ''}"><slot name="label" @slotchange=${(e: any) => { this.hasLabelSlot = e.target.assignedNodes().length > 0 }}>${this.label}</slot></label>
  <div part="wraper" class="wrapper">
    <div part="prefix" class="prefix ${this._prefix || this.hasPrefixSlot ? 'has' : ''}"><slot name="prefix" @slotchange=${(e: any) => { this.hasPrefixSlot = e.target.assignedNodes().length > 0 }}>${this._prefix}</slot></div>
    <input id="input" type="text" part="input" class="input"  />

        <div part="suffix" class="suffix ${this._suffix || this.hasSuffixSlot ? 'has' : ''}"><slot name="suffix" @slotchange=${(e: any) => { this.hasSuffixSlot = e.target.assignedNodes().length > 0 }}>${this._suffix}</slot></div>
       </div>
     <div part="helptext" class="helptext ${this.helpText || this.hasHelpTextSlot ? 'has' : ''}"><slot name="help-text" @slotchange=${(e: any) => { this.hasHelpTextSlot = e.target.assignedNodes().length > 0 }}>${this.helpText}</slot></div>

 
    
    `;
  }
}
