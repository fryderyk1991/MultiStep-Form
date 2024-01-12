import ResetStyle from "./components/ResetStyle";
import GlobalStyle from "./components/GlobalStyle";
import Form from "./components/Form/Form";
import Progressbar from "./components/Progressbar/Progressbar";
import Card from "./components/Card/Card";
import { useState } from "react";
import validateInput from "./validation";
// import steps from "./formSteps";

const App = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [gender, setGender] = useState('');
  const [selected, setSelected] = useState('Select item');
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    experience: "",
    country: "",
    city: "",
    street: "",
  });
  const [errors, setErrors] = useState({});
  const [progress, setProgress] = useState(0);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
    const updatedErrors = { ...errors, [name]: validateInput(name, value) };
    setErrors(updatedErrors);

    pushProgress(values);
  };

  const pushProgress = (values) => {
    let filledFields = 0;

    for (const key in values) {
      if (values[key] !== "") {
        filledFields++;
      }
    }

    setProgress(filledFields * 14.3);
  };
  
  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    for (const key in values) {
      if (values[key] !== "") {
        if(gender && selected) {
          console.log(values)
        }
      }
    }
  };
  
  const nextStepHandle = (next) => {
    setActiveStep(next);
  }
  const prevStepHandle = (prev) => {
    setActiveStep(prev);
  }
  const handleChecked = (value) => {
    setGender(value);
  }

  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <Progressbar progress={progress} />
      <Card>
        <Form
          handleSubmit={handleSubmit}
          nextStepHandle={nextStepHandle}
          prevStepHandle={prevStepHandle}
          activeStep={activeStep}
          handleChecked={handleChecked}
          gender={gender}
          selected={selected}
          setSelected={setSelected}
          handleChangeInput={handleChangeInput}
          errors={errors}
          values={values}
        />
      </Card>
    </>
  );
}


export default App;