import ResetStyle from "./components/ResetStyle";
import GlobalStyle from "./components/GlobalStyle";
import Form from "./components/Form/Form";
import Progressbar from "./components/Progressbar/Progressbar";
import Card from "./components/Card/Card";
import { useState, useEffect} from "react";
import validateInput from "./validation";
// import steps from "./formSteps";

const App = () => {
  const [activeStep, setActiveStep] = useState(1);
  // const [showStep, setShowStep] = useState(false);
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
    gender: "",
    dropdown: "",
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
        // if(gender && selected) {
        //   console.log(values)
        // }
        
      }
      console.log(values)
    }
  };
  
  const nextStepHandle = (next) => {
    setActiveStep(next);
    // setShowStep(true)
  }
  const prevStepHandle = (prev) => {
    setActiveStep(prev);
    // setShowStep(true)
  }
  const handleChecked = (value) => {
    setGender(value);
    console.log(value)
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
          // showStep={showStep}
        />
      </Card>
    </>
  );
}


export default App;