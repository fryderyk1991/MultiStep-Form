import styled from "styled-components";

const DropdownList = styled.ul`
  position: absolute;
  top: 45px;
  border-radius: 10px;
  background: #31363b;
  left: 0;
  width: 100%;
  list-style-type: none;
  box-shadow: inset 6px 6px 12px #2c3035, inset -6px -6px 12px #363c41;
  max-height: 0;
  transition: max-height 300ms ease-in-out;
  overflow: hidden;
  z-index: 10;
  ${props => props.$isOpen && `
  max-height: 600px;
  transition: max-height 300ms ease-in-out;
`}
`
const DropdownListItem = styled.li`
  padding: 1.5rem;
  opacity: 1;
  position: relative;
  cursor: pointer;
&::after {
  position:absolute;
  top: 0;
  left: 0;
  width:100%;
  height:100%;
  content:"";
  opacity: 0;
  transition: opacity 200ms;
  z-index: 10
}
&:hover {
  &::after {
    opacity: 0.2;
    background: linear-gradient(107deg, rgb(255, 67, 5) 11.1%, rgb(245, 135, 0) 95.3%);
  }
}
${props => props.$isOpen && `
    opacity: 1;
    transition: opacity 300ms 100ms;
    &:after {
      opacity: 0.2;
    }
  `}
`
const DropdownContainer = styled.div`
  user-select: none;
  position: relative;
  padding: 1.2rem 1rem;
  height: 40px;
  border-radius: 10px;
  border: none;
  background: #31363b;
  box-shadow: inset 6px 6px 12px #2c3035, inset -6px -6px 12px #363c41;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3px;
`;

const DropdownBtn = styled.button`
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




export {DropdownContainer, DropdownBtn, DropdownList, DropdownListItem}