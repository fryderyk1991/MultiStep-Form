import { useState } from "react";
import {
  DropdownContainer,
  DropDownBtn,
  DropDownList,
  DropDownListItem,
} from "./DropDown.styled";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownContainer>
        <div>Drop</div>
      <DropDownList $isOpen={isOpen}>
       <DropDownListItem>Item 1</DropDownListItem>
       <DropDownListItem>Item 2</DropDownListItem>
       <DropDownListItem>Item 2</DropDownListItem>
       <DropDownListItem>Item 2</DropDownListItem>
      </DropDownList>
      <DropDownBtn onClick={() => {setIsOpen(!isOpen);console.log(isOpen)}}></DropDownBtn>
    </DropdownContainer>
  );
};

export default DropDown;
