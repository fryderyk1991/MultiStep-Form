import { useState } from "react";
import {
  DropdownContainer,
  DropDownBtn,
  DropDownList,
  DropDownListItem,
} from "./DropDown.styled";
import { IoMdArrowDropdown } from "react-icons/io";


const DropDown = ( {options, onChange, value} ) => {
  const [isOpen, setIsOpen] = useState(false);

  // const handleValue = (e) => {
  //   setValue(e.target.textContent)
  // }

  return (
    <DropdownContainer>
        <div>{value}</div>
      <DropDownList $isOpen={isOpen}>
      {options.map((option) => (
        <DropDownListItem  key={option.value} onClick={() => {onChange(option.value); setIsOpen(!isOpen)}}>
          <input
          style={{display: "none"}}
           type="radio"
           id={option.value}
           name="dropdown"
           value={option.value}
           onChange={() => onChange(option.value)}
           checked={value === option.value}/>
          <label htmlFor={option.value}>{option.value}</label>
        </DropDownListItem>
      ))}
       {/* <DropDownListItem onClick={(e) => {setIsOpen(!isOpen);handleValue(e)}} $isOpen={isOpen}>Item 1</DropDownListItem>
       <DropDownListItem onClick={() => {setIsOpen(!isOpen)}} $isOpen={isOpen}>Item 2</DropDownListItem>
       <DropDownListItem onClick={() => {setIsOpen(!isOpen)}} $isOpen={isOpen}>Item 2</DropDownListItem>
       <DropDownListItem onClick={() => {setIsOpen(!isOpen)}} $isOpen={isOpen}>Item 2</DropDownListItem> */}
       
      </DropDownList>
      <DropDownBtn onClick={() => {setIsOpen(!isOpen)}} $isOpen={isOpen}><IoMdArrowDropdown /></DropDownBtn>
    </DropdownContainer>
  );
};

export default DropDown;
