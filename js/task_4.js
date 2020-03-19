const counterValue = document.querySelector("#value");
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

const handleClickIncrement = () => {
  counterValue.textContent = parseInt(counterValue.textContent) + 1;
};
const handleClickDecrement = () => {
  counterValue.textContent = parseInt(counterValue.textContent) - 1;
};
incrementBtn.addEventListener("click", handleClickIncrement);
decrementBtn.addEventListener("click", handleClickDecrement);
