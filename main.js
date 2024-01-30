const buttonContainter = document.getElementById("button-container");
const htmlCount = document.getElementById("count");
let count = 0;

const update = () => {
  htmlCount.innerText = `${count}`;
};

const counter = (e) => {
  const click = e.target.textContent;
  if (click === "DECREASE") count--;
  if (click === "RESET") count = 0;
  if (click === "INCREASE") count++;
  update();
};

buttonContainter.addEventListener("click", counter);
