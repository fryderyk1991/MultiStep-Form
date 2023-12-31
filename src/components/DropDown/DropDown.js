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
  const [value, setValue] = useState('Drop');

  const handleValue = (e) => {
    setValue(e.target.textContent)
  }

  return (
    <DropdownContainer>
        <div>{value}</div>
      <DropDownList $isOpen={isOpen}>
       <DropDownListItem onClick={(e) => {setIsOpen(!isOpen); handleValue(e)}} $isOpen={isOpen}>Item 1</DropDownListItem>
       <DropDownListItem onClick={() => {setIsOpen(!isOpen)}} $isOpen={isOpen}>Item 2</DropDownListItem>
       <DropDownListItem onClick={() => {setIsOpen(!isOpen)}} $isOpen={isOpen}>Item 2</DropDownListItem>
       <DropDownListItem onClick={() => {setIsOpen(!isOpen)}} $isOpen={isOpen}>Item 2</DropDownListItem>
      </DropDownList>
      <DropDownBtn onClick={() => {setIsOpen(!isOpen)}} $isOpen={isOpen}><IoMdArrowDropdown /></DropDownBtn>
    </DropdownContainer>
  );
};

export default DropDown;
