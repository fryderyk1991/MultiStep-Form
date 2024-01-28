import styled from "styled-components";

const CardStyled = styled.div`
  ${(props) =>
    props.$showModal &&
    `
  opacity: 0;
  visibility: 0;
`}
  border-radius: 10px;
  background: #31363b;
  box-shadow: 5px 5px 10px #2a2e32, -5px -5px 10px #383e44;
  width: 300px;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 4rem;
  transition: all 500ms ease;
`;

export { CardStyled };
