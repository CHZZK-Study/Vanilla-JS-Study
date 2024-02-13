const menu = document.querySelector(".menu");
const drop = document.querySelector(".drop");

const dropDown = () => {
  drop.classList.toggle("hide");
};

menu.addEventListener("click", dropDown);
