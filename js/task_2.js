const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

const listItemsRef = ingredients.map(function(ingredient) {
  const item = document.createElement("li");
  item.textContent = ingredient;
  return item;
});
const listRef = document.querySelector("#ingredients");
listRef.append(...listItemsRef);
