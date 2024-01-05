import { InputStyled, RadioInputStyled } from "./Input.styled";
import Dropdown from "../Dropdown/Dropdown";
const Input = ( { type, name, id, value } ) => {
    return (
      <>
      {/* {type === 'radio' ? (
        <RadioInputStyled type={type} name={name} id={id} value={value} />
      ) : (
        <InputStyled type={type} name={name} value={value}/>
      )} */}
      {type === 'radio' ? (
    <RadioInputStyled type={type} name={name} id={id} value={value} />
  ) : type === 'dropdown' ? (
    <Dropdown type={type} name={name} id={id} value={value} />
  ) : (
    <InputStyled type={type} name={name} value={value} />
  )}
      </>
    );
}


export default Input;