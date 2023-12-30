import styled from "styled-components";

const ButtonStyled = styled.button`
  display: flex;
  padding: 1rem 3rem;
  border-radius: 10px;
  border: none;
  background: linear-gradient(107deg, rgb(255, 67, 5) 11.1%, rgb(245, 135, 0) 95.3%);
  color: #31353A;
  font-size: 2rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s;
  &:before {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border-radius: 10px;
    z-index: -1;
  }
  &:active {
    transform: translateY(1px);
  }
  &:hover {
    color: black;
    transition: color 300ms;
  }
`;

export { ButtonStyled };
