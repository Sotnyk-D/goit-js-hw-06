const setFontSizeTo = (element, fontSize) => {
  element.style.fontSize = `${fontSize}px`;
};

document
  .getElementById("font-size-control")
  .addEventListener("input", (event) => {
    setFontSizeTo(document.querySelector("span#text"), event.target.value);
  });
