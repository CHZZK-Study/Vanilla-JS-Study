const menu = document.querySelector(".menu");
const drop = document.querySelector(".drop");
const wide = document.querySelector(".wide");
const dropDown = () => {
  drop.classList.toggle("hide");
};

const resize = (e) => {
  const width = e.currentTarget.innerWidth;
  width < screen.width * 0.5 ? wide.classList.add("fold") : wide.classList.remove("fold");
};

menu.addEventListener("click", dropDown);
window.addEventListener("resize", resize);
