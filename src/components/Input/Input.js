import { InputStyled, RadioInputStyled } from "./Input.styled";
import Dropdown from "../Dropdown/Dropdown";
const Input = ( { type, name, id, value, onChange, options, selected, setSelected } ) => {
    return (
      <>
      {type === 'radio' ? (
    <RadioInputStyled type={type} name={name} id={id} value={value} />
  ) : type === 'dropdown' ? (
    <Dropdown type={type} name={name} id={id} options={options} selected={selected} setSelected={setSelected} />
  ) : (
    <InputStyled type={type} name={name} value={value} onChange={onChange} />
  )}
      </>
    );
}


export default Input;