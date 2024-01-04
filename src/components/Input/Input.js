import { InputStyled, RadioInputStyled } from "./Input.styled";
const Input = ( { type, name, id, value, options } ) => {
    return (
      <>
      {type === 'radio' ? (
        <RadioInputStyled type={type} name={name} id={id} value={value} />
      ) : (
        <InputStyled type={type} name={name} value={value}/>
      )}
      </>
    );
}


export default Input;