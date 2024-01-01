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
        flex-direction: column;
        justify-content: center;
        background-color: #31353A;
        color: #929aab;
    }
    label, input {
        color: inherit;
        display: block;
    }
`;

export default GlobalStyle;
