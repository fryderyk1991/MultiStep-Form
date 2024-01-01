import { CardStyled } from "./Card.styled";
const Card = ({children}) => {
  return (
    <CardStyled>{children}</CardStyled>
  );
};

export default Card;