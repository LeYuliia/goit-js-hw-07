const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

const jsList = document.createElement("ul");
const listItemsRef = ingredients.reduce((item, ingredient) => {
  item = document.createElement("li");
  item.textContent = ingredient;
  jsList.appendChild(item);
  return jsList;
},[]);

const listRef = document.querySelector("#ingredients");
listRef.append(jsList);

