import ResetStyle from "./components/ResetStyle";
import GlobalStyle from "./components/GlobalStyle";
import Form from "./components/Form/Form";
import Progressbar from "./components/Progressbar/Progressbar";
import Card from "./components/Card/Card"
// import Input from "./components/Input/Input";
// import Label from "./components/Label/Label";

const App = () => {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <Progressbar />
      <Card>
      <Form />
      </Card>
      
     
    {/* <Input />
    <Label>Male</Label> */}
    </>
  );
}


export default App;