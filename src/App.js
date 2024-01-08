import ResetStyle from "./components/ResetStyle";
import GlobalStyle from "./components/GlobalStyle";
import Form from "./components/Form/Form";
import Progressbar from "./components/Progressbar/Progressbar";
import Card from "./components/Card/Card";
import { useState } from "react";
import validation from "./validation";
import inputs from "./inputFields";

const App = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [gender, setGender] = useState('');
  const [selected, setSelected] = useState('Select item');
  // const [values, setValues] = useState({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   experience: '',
  //   country: '',
  //   city: '',
  //   street: '',
  // });

  // const [errors, setErrors] = useState({});

  const handleChangeInput = (e) => {
    // console.log(e.target.value);
    // setValues(e.target.value)
    // setErrors(validation(values, inputs));
    // console.log(errors)
    console.log(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (gender) {
      console.log('działa')
    }
  }
  const nextStepHandle = (next) => {
    setActiveStep(next);
  }
  const prevStepHandle = (prev) => {
    setActiveStep(prev);
  }
  ///checkbox
  const handleChecked = (value) => {
   setGender(value);
   console.log(value) 

   // jezeli gender bedzie puste nie idziemy dalej
  } 
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <Progressbar />
      <Card>
      <Form handleSubmit={handleSubmit} nextStepHandle={nextStepHandle} prevStepHandle={prevStepHandle} activeStep={activeStep} handleChecked={handleChecked} gender={gender} selected={selected} setSelected={setSelected} handleChangeInput={handleChangeInput}/>
      </Card>
    </>
  );
}


export default App;