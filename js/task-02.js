const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.querySelector("#ingredients");

const listOfIngridients = ingredients.map((ingredient) => {
  let item = document.createElement("li");
  item.classList.add("item");
  item.textContent = ingredient;
  return item;
});
ingredientsList.append(...listOfIngridients);
