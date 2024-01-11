import { useState } from "react";
import {
  DropdownContainer,
  DropdownBtn,
  DropdownList,
  DropdownListItem,
} from "./Dropdown.styled";
import { IoMdArrowDropdown } from "react-icons/io";


const Dropdown = ( { options, selected, setSelected} ) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DropdownContainer>
        {selected}
           <DropdownList $isOpen={isOpen}>
            {options.map((option, index) => (
              <DropdownListItem key={index} onClick={() => {setSelected(option)
                setIsOpen(!isOpen)
              }}>{option}</DropdownListItem>
            ))}
          </DropdownList>
      <DropdownBtn type="button" onClick={() => {setIsOpen(!isOpen)}} $isOpen={isOpen}><IoMdArrowDropdown /></DropdownBtn>
    </DropdownContainer>
  );
};

export default Dropdown;
