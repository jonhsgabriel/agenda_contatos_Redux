import { createGlobalStyle } from 'styled-components';
import colors from './colors.ts';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

body {
background-color: ${colors.background};
color: ${colors.text};
font-size: 16px;
}

h1 {
color: ${colors.primary};
}

button {
font-family: inherit;
cursor: pointer;
}
`;

export default GlobalStyle;
