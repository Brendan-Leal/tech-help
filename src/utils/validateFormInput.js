export default function validateFormInput(event, formData) {
  const prevState = { ...formData };
  const name = event.target.name;
  const value = event.target.value;

  let validData = {
    ...prevState,
    [name]: value,
  };

  validatePhoneNumber(name, value, validData);

  return validData;
}

function validatePhoneNumber(name, value, validData) {
  if (name === "mobilephone") {
    // Replace non numeric characters with empty string
    validData[name] = value.replace(/\D/g, "");
  }
}
