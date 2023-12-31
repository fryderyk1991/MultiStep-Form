import styled from "styled-components";

const DropDownList = styled.ul`
  position: absolute;
  top: 45px;
  border-radius: 10px;
  left: 0;
  width: 100%;
  list-style-type: none;
  box-shadow: inset 6px 6px 12px #2c3035, inset -6px -6px 12px #363c41;
  max-height: 0;
  transition: max-height 300ms ease-out;
  overflow: hidden;
  ${props => props.$isOpen && `
  max-height: 600px;
  transition: max-height 300ms;
`}
`
const DropDownListItem = styled.li`
  padding: 1rem;
  opacity: 0;
  position: relative;
  cursor: pointer;
  ${props => props.$isOpen && `
    opacity: 1;
    transition: opacity 300ms 100ms;
`}
&::after {
  position:absolute;
  top: 0;
  left: 0;
  width:100%;
  height:100%;
  content:"";
  background: linear-gradient(107deg, rgb(255, 67, 5) 11.1%, rgb(245, 135, 0) 95.3%);
  opacity: 0;
  transition: opacity 200ms;
}
&:hover {
  &::after {
    opacity: 0.2;
  }
}
`
const DropdownContainer = styled.div`
  position: relative;
  padding: 1.2rem 1rem;
  width: 100px;
  height: 40px;
  border-radius: 10px;
  border: none;
  background: #31363b;
  box-shadow: inset 6px 6px 12px #2c3035, inset -6px -6px 12px #363c41;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DropDownBtn = styled.button`
display: flex;
background: none;
border: none;
color: #f96d00;
font-size: 2rem;
cursor: pointer;
transform-style: preserve-3d;
transition: transform 300ms ease-out;
${props => props.$isOpen && `
  transform: rotateX(180deg);
  transition: transform 200ms;
`}
`;




export {DropdownContainer, DropDownBtn, DropDownList, DropDownListItem}