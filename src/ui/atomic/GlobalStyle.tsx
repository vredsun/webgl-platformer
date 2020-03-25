import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ::selection {
    background-color: #5588ff;
    color: white;
  }
  ::-moz-selection {
    background-color: #5588ff;
    color: white;
  }
`;

export default GlobalStyle;
