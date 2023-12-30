import { LabelStyled } from "../Input/Input.styled";
const Label = ({children}) => {
  return (
    <LabelStyled htmlFor="radioInput">{children}</LabelStyled>
  );
}; 

export default Label;