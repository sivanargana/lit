import { css } from "lit";
export default css`
  .card {
    background-color: white;
    border: 1px solid var(--msr-color-gray-300);
    border-radius: 6px;
    display: flex;
    flex-direction: column;
  }

  .card .card__header {
    display: none;
    flex-direction: column;
    border-bottom: 1px solid var(--msr-color-gray-300);
    padding: 0.5rem 1rem;
  }

  .card .card__header [slot="header"] {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .card.card--has-header .card__header {
    display: flex;
  }

  .card .card__body {
    display: block;
    padding: 1rem;
  }
`;
