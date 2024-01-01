import { InputStyled, RadioInputStyled } from "./Input.styled";
const Input = ( { type, name, id } ) => {
    return (
      <>
      {type === 'radio' ? (
        <RadioInputStyled type={type} name={name} id={id}/>
      ) : (
        <InputStyled type={type} name={name} />
      )}
      </>
    );
}


export default Input;