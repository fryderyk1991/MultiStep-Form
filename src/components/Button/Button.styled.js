import styled from "styled-components";

const ButtonStyled = styled.button`
  display: flex;
  padding: 1rem 3rem;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  color: #f96d00;
  font-size: 2rem;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s;
  border-radius: 10px;
  background: #31363b;
  box-shadow: 5px 5px 10px #2a2e32, -5px -5px 10px #383e44;
  position: relative;
  &:active {
    transform: translateY(1px);
  }
  &::after, &::before {
    position: absolute;
    background-color: #929aab;
    content: "";
    opacity: 0.1;
    transition: width 0.3s;
    z-index: 0;
  }
  &::after {
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  &::before {
    top: 0;
    right: 0;
    width: 0;
    height: 100%;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  &:hover  {
    &::before {
      width: 50%;
    }
    &::after {
      width: 50%;
    }
  }
`;

export { ButtonStyled };
