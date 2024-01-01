import React from "react";
import { FormStyled } from "./Form.styled";
import inputs from "../../inputFields";
import Label from "../Label/Label";
import Input from "../Input/Input";
import { RadioInputStyled } from "../Input/Input.styled";
import Button from "../Button/Button"
import { MdOutlineDoubleArrow } from "react-icons/md";

const Form = () => {
  return (
    <FormStyled>
      <div className="form-group">
          {inputs.map((field) => (
          <React.Fragment key={field.name}>
            {field.type === 'radio' && (
              <RadioInputStyled type={field.type} name={field.name} id={field.name} />
            )}
            <Label htmlFor={field.name}>
              {field.label}
              {field.type !== 'radio' && (
                <Input name={field.name} type={field.type} id={field.name} />
              )}
            </Label>
          </React.Fragment>
        ))}
          <Button><MdOutlineDoubleArrow/></Button>
        </div>
    </FormStyled>
  );
};

export default Form;

///Card bedzie miało stepId i wtedy renderuje tylko te input ktore maja ten sam stepId 