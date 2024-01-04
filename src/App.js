import ResetStyle from "./components/ResetStyle";
import GlobalStyle from "./components/GlobalStyle";
import Form from "./components/Form/Form";
import Progressbar from "./components/Progressbar/Progressbar";
import Card from "./components/Card/Card";
import { useState } from "react";

const App = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [gender, setGender] = useState('')
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit')
  }
  const nextStepHandle = (next) => {
    setActiveStep(next);
  }
  const prevStepHandle = (prev) => {
    setActiveStep(prev);
  }
  const handleChecked = (e) => {
    if(e.target.value) {
      setGender(e.target.value);
    }
    else {
      setGender(gender)
    }
    
  } 
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <Progressbar />
      <Card>
      <Form handleSubmit={handleSubmit} nextStepHandle={nextStepHandle} prevStepHandle={prevStepHandle} activeStep={activeStep} handleChecked={handleChecked}/>
      </Card>
    </>
  );
}


export default App;