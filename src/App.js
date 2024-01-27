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
  // const [showStep, setShowStep] = useState(false);
  const [selected, setSelected] = useState('Select item');
  const [isChecked, setIsChecked] = useState('')
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
    // setValues((prevValues) => ({
    //   ...prevValues,
    //   dropdown: value,
    // }));
    // pushProgress({ dropdown: value });
    setValues((prevValues) => {
      const updatedValues = { ...prevValues, dropdown: value };
      pushProgress(updatedValues);
      return updatedValues;
    });
  };

  const pushProgress = (values) => {
    const totalFields = 9; // Assuming you have 9 fields
    const filledFields = Object.values(values).filter(
      (value) => value.trim() !== ""
    ).length;
    const progress = (filledFields / totalFields) * 100;
    setProgress(progress);
  };

  // useEffect(() => {
  //   // Set isActive to true when next or prev is clicked
  //   setShowStep(true)
  //   // Clear isActive after the transition duration (300ms in this case)
  //   const timeoutId = setTimeout(() => {
  //     setShowStep(false);
  //   }, 2000);

  //   // Cleanup the timeout to avoid memory leaks
  //   return () => clearTimeout(timeoutId);
  // }, [activeStep]);

  const handleSubmit = (e) => {
    e.preventDefault();
    for (const key in values) {
      if (values[key] !== "") {
        /// dodanie modala
      }
    }
    console.log(values);
  };

  const nextStepHandle = (next) => {
    setActiveStep(next);
    // setShowStep(true)
  };
  const prevStepHandle = (prev) => {
    setActiveStep(prev);
    // setShowStep(true)
  };
  const handleChecked = (value) => {
    setIsChecked(value);
    /// tu możemy dodać error
  };

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
          selected={selected}
          setSelected={setSelected}
          handleChangeInput={handleChangeInput}
          errors={errors}
          values={values}
          setValues={setValues}
          handleDropdownChange={handleDropdownChange}
          // showStep={showStep}
        />
      </Card>
    </>
  );
}


export default App;