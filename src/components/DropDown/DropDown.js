import { useState } from "react";
import {
  DropdownContainer,
  DropdownBtn,
  DropdownList,
  DropdownListItem,
} from "./Dropdown.styled";
import { IoMdArrowDropdown } from "react-icons/io";


const Dropdown = ( { type, name, options, value } ) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownContainer>
        <div>Drop</div>
      <DropdownList $isOpen={isOpen}>
       <DropdownListItem onClick={(e) => {setIsOpen(!isOpen)}} $isOpen={isOpen}>Item 1</DropdownListItem>
       <DropdownListItem onClick={() => {setIsOpen(!isOpen)}} $isOpen={isOpen}>Item 2</DropdownListItem>
      </DropdownList>
      <DropdownBtn type="button" onClick={() => {setIsOpen(!isOpen)}} $isOpen={isOpen}><IoMdArrowDropdown /></DropdownBtn>
    </DropdownContainer>
  );
};

export default Dropdown;
