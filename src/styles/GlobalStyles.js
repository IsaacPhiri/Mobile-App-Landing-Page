import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #2a5298;
    --text-color: #213547;
    --bg-color: #ffffff;
    --button-hover: #646cff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    min-width: 0;
    min-height: 100vh;
    color: var(--text-color);
    background-color: var(--bg-color);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    max-width: 100%;
    margin: 0 auto;
    padding: 0.5rem;
  }

  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: var(--primary-color);
    color: white;
    cursor: pointer;
    transition: all 0.25s ease;

    &:hover {
      background-color: var(--button-hover);
    }

    &:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }
  }
`;

export default GlobalStyles;
