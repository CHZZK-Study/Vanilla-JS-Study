const simpleBtn = document.querySelector('#simpleBtn');
const hexBtn = document.querySelector('#hexBtn');
const colorSpan = document.querySelector('#color');
const background = document.querySelector('#container');
const clickBtn = document.querySelector('#clickBtn');

let isSimple = true;

const createRandomRgb = () => {
  return Array.from({ length: 3 }, () => Math.floor(Math.random() * 256));
};

const convertRgbToHex = () => {
  const rgb = createRandomRgb();
  const hex = rgb.map((color) => {
    const hex = color.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  });
  return `#${hex.join('')}`;
};
const setColor = (isSimple) => {
  const color = isSimple
    ? `rbga(${createRandomRgb().join(', ')})`
    : convertRgbToHex();
  background.style.backgroundColor = color;
  colorSpan.innerText = color;
};

window.addEventListener('load', setColor);
simpleBtn.addEventListener('click', () => {
  simpleBtn.style.color = 'hsl(205, 78%, 60%)';
  hexBtn.style.color = '#222';
  isSimple = true;
});
hexBtn.addEventListener('click', () => {
  hexBtn.style.color = 'hsl(205, 78%, 60%)';
  simpleBtn.style.color = '#222';
  isSimple = false;
});

clickBtn.addEventListener('click', () => setColor(isSimple));
