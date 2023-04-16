const header = document.querySelector("#header");
const colors = ["#e50914", "#00bfff", "#ff7f00", "#32cd32"];
let currentColor = 0;

setInterval(() => {
  header.style.backgroundColor = colors[currentColor];
  currentColor = (currentColor + 1) % colors.length;
}, 1000);

const toggle = document.querySelector("#toggle");
const body = document.querySelector("body");

toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
});
