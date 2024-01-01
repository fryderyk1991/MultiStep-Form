import { LabelStyled } from "../Input/Input.styled";
const Label = ({ children, htmlFor}) => {
  return (
    <LabelStyled htmlFor={htmlFor}>
      {children}
    </LabelStyled>
  );
}; 

export default Label;