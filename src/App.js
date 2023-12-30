import ResetStyle from "./components/ResetStyle";
import GlobalStyle from "./components/GlobalStyle";
import Input from "./components/Input/Input";
import Label from "./components/Label/Label";
const App = () => {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      
      <Input />
      <Label>Male</Label>
    </>
  );
}


export default App;