import { css } from "lit";
export default css`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
    vertical-align: top;
  }
    :host:has(button.btn--block),.btn.btn--block{
    display:block;
    width:100%;
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
