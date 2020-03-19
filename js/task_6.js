const validationInputRef = document.querySelector("#validation-input");
const dataLengthValue = Number(validationInputRef.getAttribute("data-length"));

validationInputRef.addEventListener("blur", event => {
  if (dataLengthValue === event.target.value.length) {
    validationInputRef.setAttribute("class", "valid");
  } else {
    console.log(event.target.value.length);
    validationInputRef.setAttribute("class", "invalid");
  }
});
