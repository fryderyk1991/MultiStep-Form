import styled from "styled-components";

const BarContainer = styled.div`
  width: 300px;
  height: 10px;
  border-radius: 10px;
  background: #31362b;
  box-shadow: inset 8px 8px 16px #292d32, inset -8px -8px 16px #393f49;
`;

const Bar = styled.div`
    width: 25%;
    height: 100%;
    border-radius: 10px;
    background: linear-gradient(107deg, rgb(255, 67, 5) 11.1%, rgb(245, 135, 0) 95.3%);
    opacity: 0.9;
`

export { BarContainer, Bar };
