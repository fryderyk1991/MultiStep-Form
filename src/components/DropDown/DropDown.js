import { useState } from "react";
import {
  DropdownContainer,
  DropdownBtn,
  DropdownList,
  DropdownListItem,
} from "./Dropdown.styled";
import { IoMdArrowDropdown } from "react-icons/io";


const Dropdown = ( {options, name, id } ) => {
  const [isOpen, setIsOpen] = useState(false);

  // const handleValue = (e) => {
  //   setValue(e.target.textContent)
  // }

  return (
    <DropdownContainer>
        <div>Drop</div>
      <DropdownList $isOpen={isOpen}>
       <DropdownListItem onClick={(e) => {setIsOpen(!isOpen)}} $isOpen={isOpen}>Item 1</DropdownListItem>
       <DropdownListItem onClick={() => {setIsOpen(!isOpen)}} $isOpen={isOpen}>Item 2</DropdownListItem>
       <DropdownListItem onClick={() => {setIsOpen(!isOpen)}} $isOpen={isOpen}>Item 2</DropdownListItem>
       <DropdownListItem onClick={() => {setIsOpen(!isOpen)}} $isOpen={isOpen}>Item 2</DropdownListItem>
      </DropdownList>
      <DropdownBtn type="button" onClick={() => {setIsOpen(!isOpen)}} $isOpen={isOpen}><IoMdArrowDropdown /></DropdownBtn>
    </DropdownContainer>
  );
};

export default Dropdown;
