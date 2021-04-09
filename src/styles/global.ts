import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  ::root {
    --Background: #F0F2F5;
    --Blue: #5429CC;
    --Blue-Light: #6933FF;
    --Green: #33CC95;
    --Red: #E62E4D;
    --Shape: #FFFFFF;
    --blue: #E52E40;
    --Title: #363F5F;
    --Text: #969CB3;
  }

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Font size 16px (Desktop) */
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px o que seria 15px / 16px = 0.9375
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  // 1 rem = 16px
  body {
    background: var(---background);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;