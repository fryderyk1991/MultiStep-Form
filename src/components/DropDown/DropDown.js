import { useState } from "react";
import {
  DropdownContainer,
  DropDownBtn,
  DropDownList,
  DropDownListItem,
} from "./DropDown.styled";
import { IoMdArrowDropdown } from "react-icons/io";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownContainer>
        <div>Drop</div>
      <DropDownList $isOpen={isOpen}>
       <DropDownListItem $isOpen={isOpen}>Item 1</DropDownListItem>
       <DropDownListItem $isOpen={isOpen}>Item 2</DropDownListItem>
       <DropDownListItem $isOpen={isOpen}>Item 2</DropDownListItem>
       <DropDownListItem $isOpen={isOpen}>Item 2</DropDownListItem>
      </DropDownList>
      <DropDownBtn onClick={() => {setIsOpen(!isOpen);console.log(isOpen)}} $isOpen={isOpen}><IoMdArrowDropdown /></DropDownBtn>
    </DropdownContainer>
  );
};

export default DropDown;
