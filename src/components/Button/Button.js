import { ButtonStyled } from "./Button.styled";
const Button = ({ type, children, onClick }) => {
  return (
      <ButtonStyled type={type} onClick={onClick}>{children}</ButtonStyled>
  );
};

export default Button;
