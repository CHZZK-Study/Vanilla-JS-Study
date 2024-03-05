const container = document.getElementById("container");
const boxs = document.querySelectorAll(".box");
const icons = document.querySelectorAll(".fa-regular");

const toggle = (e) => {
  console.log(e.target);
  icons.forEach((icon) => {
    if (e.target !== icon && icon.classList.contains("fa-square-minus")) {
      icon.classList.remove("fa-square-minus");
      icon.classList.add("fa-square-plus");
    }
  });
  const elem = e.target.closest(".box");
  elem.classList.toggle("open");

  if (e.target.classList.contains("fa-square-plus")) {
    e.target.classList.remove("fa-square-plus");
    e.target.classList.add("fa-square-minus");
  } else if (e.target.classList.contains("fa-square-minus")) {
    e.target.classList.remove("fa-square-minus");
    e.target.classList.add("fa-square-plus");
  }

  boxs.forEach((box) => {
    if (elem !== box && box.classList.contains("open")) {
      box.classList.remove("open");
    }
  });
};

container.addEventListener("click", toggle);
