import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
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
    -moz-osx-font-smoothing: grayscale;
  }

  body, input, button, textarea {
    font-family: 'Poppins', sans-serif;
    font-weight: 400 ;
  } 

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
    outline: none;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

  }

  .react-modal-content {
    width: 100%;
    max-height: 36.75rem;
    height: 100%;
    max-width: 36rem;
    background: var(--Background);
    padding: 4rem 3rem;
    position: relative;

    border-radius: 0.3125rem;
  }

  .react-modal-close {
    position: absolute;
    width: 0.875rem;
    height: 0.875rem;
    right: 1.3125rem;
    top: 1.3125rem;
    border: 0;
    background: transparent;

    transition: filter 300ms ease-in-out;

    &:hover {
      filter: brightness(0.9);
      transform: scale(1.1);
    }
  }

`;