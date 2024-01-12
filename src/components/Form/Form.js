import React from "react";
import { FormStyled, FormGroupStyled } from "./Form.styled";
import inputs from "../../inputFields";
import steps from "../../formSteps";
import Label from "../Label/Label";
import Input from "../Input/Input";
import { RadioInputStyled } from "../Input/Input.styled";
import { ButtonParentStyled } from "../Button/Button.styled";
import stepButtonsConfig from "../../buttonsConfig";

const Form = ({
  handleSubmit,
  nextStepHandle,
  prevStepHandle,
  activeStep,
  handleChecked,
  gender,
  handleChangeInput,
  selected,
  setSelected,
  errors,
  values,
}) => {

  const stepButtons = stepButtonsConfig(nextStepHandle, prevStepHandle, activeStep);

  return (
    <FormStyled onSubmit={handleSubmit}>
      {steps.map(
        (step) =>
          step.id === activeStep && (
            <FormGroupStyled key={step.id} id={step.id}>
              {inputs
                .filter((input) => input.stepId === step.id)
                .map((field) => (
                  <React.Fragment key={field.name}>
                    {field.type === "radio" && (
                      <RadioInputStyled
                        type={field.type}
                        name={field.name}
                        id={field.name}
                        checked={gender === field.value}
                        onChange={() => handleChecked(field.value)}
                      />
                    )}
                    <Label htmlFor={field.name}>
                      {field.label}
                      {field.type !== "radio" ? (
                        <Input
                          name={field.name}
                          type={field.type}
                          id={field.name}
                          onChange={(e) => handleChangeInput(e)}
                          options={field.options}
                          selected={selected}
                          setSelected={setSelected}
                          value={values[field.name]}
                        />
                      ) : null}
                      {errors[field.name] ? (
                        <span style={{ color: "red" }}>
                          {errors[field.name]}
                        </span>
                      ) : null}
                    </Label>
                  </React.Fragment>
                ))}
              <ButtonParentStyled $isStep1={step.id === 1}>
              {stepButtons[step.id]}
              </ButtonParentStyled>
            </FormGroupStyled>
          )
      )}
    </FormStyled>
  );
};

export default Form;


