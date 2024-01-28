import ResetStyle from "./components/ResetStyle";
import GlobalStyle from "./components/GlobalStyle";
import Form from "./components/Form/Form";
import Progressbar from "./components/Progressbar/Progressbar";
import Card from "./components/Card/Card";
import Modal from "./components/Modal/Modal";
import { useState } from "react";
import validateInput from "./validation";

const App = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [selected, setSelected] = useState('Select item');
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    experience: "",
    country: "",
    city: "",
    street: "",
    gender: "",
    dropdown: "",
  });
  const [errors, setErrors] = useState({});
  const [progress, setProgress] = useState(0);
  const [showModal, setShowModal] = useState(false)


  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => {
      const updatedValues = { ...prevValues, [name]: value };
      pushProgress(updatedValues); 
      return updatedValues;
    });
    const updatedErrors = { ...errors, [name]: validateInput(name, value) };
    setErrors(updatedErrors);
  };
  const handleDropdownChange = (value) => {
    setValues((prevValues) => {
      const updatedValues = { ...prevValues, dropdown: value };
      pushProgress(updatedValues);
      return updatedValues;
    });
    const updatedErrors = { ...errors, dropdown: validateInput('dropdown', value) };
    setErrors(updatedErrors);
  };

  const pushProgress = (values) => {
    const totalFields = 9;
    const filledFields = Object.values(values).filter(
      (value) => value.trim() !== ""
    ).length;
    const progress = (filledFields / totalFields) * 100;
    setProgress(progress);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    let updatedErrors = {};
    const allValuesFilled = Object.keys(values).every((key) => !!values[key]);
    if (allValuesFilled) {
      setShowModal(true)
    } else {
      for (const key in values) {
        updatedErrors[key] = validateInput(key, values[key]);
      }
      setErrors(updatedErrors);
    }
  };

  const nextStepHandle = (next) => {
    setActiveStep(next);
  };
  const prevStepHandle = (prev) => {
    setActiveStep(prev);
  };

  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <Modal showModal={showModal} />
      <Progressbar progress={progress} showModal={showModal} />
      <Card showModal={showModal}>
        <Form
          handleSubmit={handleSubmit}
          nextStepHandle={nextStepHandle}
          prevStepHandle={prevStepHandle}
          activeStep={activeStep}
          selected={selected}
          setSelected={setSelected}
          handleChangeInput={handleChangeInput}
          errors={errors}
          values={values}
          setValues={setValues}
          handleDropdownChange={handleDropdownChange}
        />
      </Card>
    </>
  );
}


export default App;