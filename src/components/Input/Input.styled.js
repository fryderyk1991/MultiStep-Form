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
 height: 25px;
  width: 25px;
  cursor: pointer;
  position: absolute;
  opacity: 0; /* Hide the actual radio input */

  &:checked + label {
    opacity: 1;
    background-color: #ff5733; /* Change the background color when checked */
  }

  & + label {
    opacity: 1;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background-color: #d3d3d3; /* Default background color */
    display: inline-block;
    position: relative;
    transition:  all 0.3s ease; /* Add a smooth transition effect */
  }
`;

export { InputStyled, RadioInputStyled };

// gradient - background: linear-gradient(107deg, rgb(255, 67, 5) 11.1%, rgb(245, 135, 0) 95.3%);

// orange #f96d00