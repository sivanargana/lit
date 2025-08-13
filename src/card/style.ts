import { css } from "lit";
export default css`
  :host {
    display: block;
  }
  .card {
    background-color: white;
    border: 1px solid var(--msr-color-gray-300);
    border-radius: 6px;
  }
  .card .card__body {
  display:block;
    padding: 1rem;
  }
`;
