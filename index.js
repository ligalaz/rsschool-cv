const right = document.querySelector(".right_slide");
const left = document.querySelector(".left_slide");
const slideRow = document.querySelector(".middle-slider");

let offset = 0;

right.addEventListener("click", () => {
  offset += 200;
  if (offset > 1600) {
    offset = 0;
  }
  slideRow.style.left = -offset + `px`;
});
left.addEventListener("click", () => {
  offset -= 200;
  if (offset < 0) {
    offset = 1600;
  }
  slideRow.style.left = -offset + `px`;
});
