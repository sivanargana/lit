import { css } from "lit";
export default css`
  :host {
    display: inline-flex;
    width: 1em;
    height: 1em;
  }
  .spinner {
    position: relative;
    width: 100%;
    height: 100%;
    animation-name:spinner;
    animation-duration:600ms;
    animation-iteration-count:infinite;
   animation-timing-function:linear;
 
  }
  .spinner:before,
  .spinner:after {
    content: "";
    position: absolute;
    inset: 0px;
    width: 100%;
    height: 100%;
    border: 2px solid transparent;
    border-radius: 99999px;
  
  }
  .spinner:before {
    border-color: var(--msr-color-gray-300);
  }
  .spinner:after {
    border-left-color: var(--msr-color-primary-500);
  }
    @keyframes spinner{
    to{
    transform:rotate(360deg)
    }
    }
`;
