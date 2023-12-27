import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
        height: 100%;
    }
    body {
        height: 100%;
        font-size: 1.6rem;
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #ececec;
    }
`;

export default GlobalStyle;
