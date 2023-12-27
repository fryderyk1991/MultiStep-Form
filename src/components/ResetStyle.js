import { createGlobalStyle } from "styled-components";

const ResetStyle = createGlobalStyle`
*,
*::before,
*::after 
{   margin: 0;
    padding: 0;
    box-sizing: border-box;
}  
`;

export default ResetStyle;
