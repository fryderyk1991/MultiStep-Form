import ResetStyle from "./components/ResetStyle";
import GlobalStyle from "./components/GlobalStyle";
// import Input from "./components/Input/Input";
// import Label from "./components/Label/Label";
// import Button from "./components/Button/Button";
import DropDown from "./components/DropDown/DropDown";
const App = () => {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      {/* <Input />
      <Label>Male</Label> */}
      <DropDown />
      {/* <Button /> */}
    </>
  );
}


export default App;