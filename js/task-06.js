const validateInput = (input) => {
  const payload = input.value;
  const validLength = input.dataset.length;
  console.log(payload.length);
  if (validLength === `${payload.length}`) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
};

const inputEl = document.getElementById("validation-input");
inputEl.addEventListener("blur", (_e) => {
  validateInput(inputEl);
});
