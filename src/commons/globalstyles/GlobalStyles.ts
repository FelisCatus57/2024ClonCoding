import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0px;
    box-sizing: border-box;
    font-weight: 400;
    font-family: 'Noto Sans KR', sans-serif;
  }
  html,
  body {
    max-width: 100%;
    overflow-x: hidden;
    font-size: 16px;
  }
`;
