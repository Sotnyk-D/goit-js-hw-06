const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  handleSubmit({ email: email.value, password: password.value }, form);
});

function handleSubmit(elements, form) {
  if (!Object.entries(elements).every(([_key, value]) => value.length > 0)) {
    return alert("Всі поля повинні бути заповнені.");
  }
  form.reset();
  console.log(elements);
}
