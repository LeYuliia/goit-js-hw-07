const range = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

range.addEventListener("input", event => {
  text.style.fontSize = `${event.target.value}px`;
});
