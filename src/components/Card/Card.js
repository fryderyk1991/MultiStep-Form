import { CardStyled } from "./Card.styled";
const Card = ({children , showModal}) => {
  return (
    <CardStyled $showModal={showModal}>{children}</CardStyled>
  );
};

export default Card;