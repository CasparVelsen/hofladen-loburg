import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    margin: 0;
    font-family: sans-serif;
    font-size: 112.5%;
  }
  main {
    margin: 0 20px;
  }
  input, label, button, textarea {
    font-size: 1em;
  }

  header {
      padding: 0 20px;
      height: 80px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #3f7d20;
      font-size: 1.3rem;
      color: white;

  }

  .view {
    min-height: calc(100vh - 80px - 1rem);
  }
`;
