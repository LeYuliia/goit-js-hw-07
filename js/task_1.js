// выведет количество категорий в ul#categories
console.log(`В списке ${categories.children.length} категории`);

//Для каждого элемента li.item
//выведет текст h2 и к-во li

const itemOfCategories = categories.querySelectorAll(".item");
const liOfItem = itemOfCategories.forEach(element => {
  const titleOfItem = element.querySelector("h2");
  console.log(`Категория: ${titleOfItem.textContent}`);

  const amountOfLi = element.querySelectorAll("li");
  console.log(`Количество элементов: ${amountOfLi.length}`);
});
