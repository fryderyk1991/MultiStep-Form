const validateInput = (name, value) => {
    if (value.trim() === "") {
      return `Field is required!`;
    }
    if (name === "email" && !value.includes('@')) {
      return `Please enter a valid email address!`;
    }
    return "";
  };

  export default validateInput