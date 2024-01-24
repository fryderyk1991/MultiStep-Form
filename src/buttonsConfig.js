import Button from '../src/components/Button/Button'
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io';

const stepButtonsConfig = (nextStepHandle, prevStepHandle, activeStep) => ({
    1: (
      <Button type="button" onClick={() => nextStepHandle(activeStep + 1)}>
        <IoMdArrowRoundForward size={20} />
      </Button>
    ),
    2: (
      <>
        <Button type="button" onClick={() => prevStepHandle(activeStep - 1)}>
          <IoMdArrowRoundBack size={20} />
        </Button>
        <Button type="button" onClick={() => nextStepHandle(activeStep + 1)}>
          <IoMdArrowRoundForward size={20} />
        </Button>
      </>
    ),
    3: (
      <>
        <Button type="button" onClick={() => prevStepHandle(activeStep - 1)}>
          <IoMdArrowRoundBack size={20} />
        </Button>
        <Button type="submit">Submit</Button>
      </>
    ),
  });
  
  export default stepButtonsConfig;