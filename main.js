const container = document.getElementById("container");
const boxs = document.querySelectorAll(".box");

const toggle = (e) => {
  const elem = e.target.closest(".box");

  elem.classList.toggle("open");

  boxs.forEach((box) => {
    if (elem !== box && box.classList.contains("open")) {
      box.classList.remove("open");
    }
  });
};

container.addEventListener("click", toggle);
