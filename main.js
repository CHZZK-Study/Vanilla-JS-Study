const clickBtn = document.querySelector(".click");
const colorCode = document.querySelector(".color-code");
const color = document.querySelector("body");
let prevColor = colorCode;

const simple = ["#ff0000", "#ff6b00", "#ffe500", "#00f50a", "#00acf5", "#cc00ff", "#ff00bb"];

//random 수 만드는 함수
const randomNumber = () => {
  const random = Math.floor(Math.random() * simple.length); // 0~6 랜덤 수 생성
  return random;
};

// 색상 바꾸는 함수
const changeBackground = () => {
  let newColor = simple[randomNumber()];
  while (newColor === prevColor) {
    newColor = simple[randomNumber()];
  }
  colorCode.textContent = newColor;
  color.style.backgroundColor = newColor;
  prevColor = newColor;
};

clickBtn.addEventListener("click", changeBackground);
