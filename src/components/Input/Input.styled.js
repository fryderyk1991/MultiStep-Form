import styled from "styled-components";

const InputStyled = styled.input`
  padding: 1rem 1.2rem;
  background: #31363b;
  outline: none;
  border-radius: 20px;
  border: none;
  background: #31363b;
  box-shadow: inset 6px 6px 12px #2c3035, inset -6px -6px 12px #363c41;
`;

const RadioInputStyled = styled.input.attrs({ type: "radio" })`
display: none;
`;
const LabelStyled = styled.label`
  position: relative;
  cursor: pointer;

  ${RadioInputStyled}:checked + &::before {
    opacity: 1;
    visibility: visible;
    transform: scale(1);
  }

  ${RadioInputStyled} + & {
    &::after,
    &::before {
      content: "";
      position: absolute;
      border-radius: 50%;
    }
    &::after {
      height: 15px;
      width: 15px;
      border: 1px solid #f96d00;
      margin-left: 10px;
      top: calc(50% - 7.5px);
    }
    &::before {
      height: 10px;
      width: 10px;
      background: linear-gradient(107deg, rgb(255, 67, 5) 11.1%, rgb(245, 135, 0) 95.3%);
      top: calc(50% - 5px);
      left: calc(100% + 12.5px);
      transform: scale(3);
      opacity: 0;
      visibility: hidden;
      transition: 300ms ease ;
    }
  }
`;
export { InputStyled, RadioInputStyled, LabelStyled };

// gradient - background: linear-gradient(107deg, rgb(255, 67, 5) 11.1%, rgb(245, 135, 0) 95.3%);

// orange #f96d00