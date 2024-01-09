import { InputStyled, RadioInputStyled } from "./Input.styled";
import Dropdown from "../Dropdown/Dropdown";
const Input = ( { type, name, id, value, onChange, options, selected, setSelected, gender } ) => {
    return (
      <>
      {type === 'radio' ? (
    <RadioInputStyled type={type} name={name} id={id} value={value} gender={gender}/>
  ) : type === 'dropdown' ? (
    <Dropdown type={type} name={name} id={id} options={options} selected={selected} setSelected={setSelected} />
  ) : (
    <InputStyled type={type} name={name} value={value} onChange={onChange}  />
  )}
      </>
    );
}


export default Input;