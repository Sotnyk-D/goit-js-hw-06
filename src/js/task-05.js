const outputName = (name) => {
  const validName = name === "" ? "Anonymous" : name;
  document.getElementById("name-output").innerHTML = validName;
};

const inputEl = document.getElementById("name-input");
inputEl.addEventListener("input", (event) => {
  outputName(event.target.value);
});
