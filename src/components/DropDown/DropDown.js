import {
  DropdownContainer,
  DropDownBtn,
  DropDownList,
  DropDownListItem,
} from "./DropDown.styled";

const DropDown = () => {
  return (
    <DropdownContainer>
        <div>Drop</div>
      <DropDownList>
       <DropDownListItem>Item 1</DropDownListItem>
       <DropDownListItem>Item 2</DropDownListItem>
       <DropDownListItem>Item 2</DropDownListItem>
       <DropDownListItem>Item 2</DropDownListItem>
      </DropDownList>
      <DropDownBtn></DropDownBtn>
    </DropdownContainer>
  );
};

export default DropDown;
