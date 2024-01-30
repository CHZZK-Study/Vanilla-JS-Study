const buttonContainter = document.getElementById("button-container");
const countValue = document.getElementById("count");
const color = ["green", "red", "black"];
let count = 0;

const update = () => {
  countValue.innerText = `${count}`;
  if (count > 0) countValue.style.color = color[0];
  if (count < 0) countValue.style.color = color[1];
  if (count === 0) countValue.style.color = color[2];
};

const counter = (e) => {
  const click = e.target.classList;
  if (click.contains("decrease")) count--;
  if (click.contains("reset")) count = 0;
  if (click.contains("increase")) count++;
  update();
};

buttonContainter.addEventListener("click", counter);
