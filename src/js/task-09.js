function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const applyNewColor = (color) => {
  document.body.style.backgroundColor = color;
  document.querySelector("span").innerHTML = color;
};

document
  .querySelector("button.change-color")
  .addEventListener("click", (event) => {
    applyNewColor(getRandomHexColor());
  });
