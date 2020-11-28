let accentDiv1 = document.querySelector(".accentDiv1");
let accentDiv2 = document.querySelector(".accentDiv2");
let random = document.querySelector(".random");

const change = function () {
  let num = Math.floor(Math.random() * 10);
  if (num == 0) {
  accentDiv1.style.backgroundColor = "pink";
  accentDiv2.style.backgroundColor = "pink";
} else if (num == 1) {
  accentDiv1.style.backgroundColor = "green";
  accentDiv2.style.backgroundColor = "green";
} else if (num == 2) {
  accentDiv1.style.backgroundColor = "black";
  accentDiv2.style.backgroundColor = "black";
} else if (num == 3) {
  accentDiv1.style.backgroundColor = "white";
  accentDiv2.style.backgroundColor = "white";
} else if (num == 4) {
  accentDiv1.style.backgroundColor = "orange";
  accentDiv2.style.backgroundColor = "orange";
} else if (num == 5) {
  accentDiv1.style.backgroundColor = "purple";
  accentDiv2.style.backgroundColor = "purple";
} else if (num == 6) {
  accentDiv1.style.backgroundColor = "gray";
  accentDiv2.style.backgroundColor = "gray";
} else if (num == 7) {
  accentDiv1.style.backgroundColor = "red";
  accentDiv2.style.backgroundColor = "red";
} else if (num == 8) {
  accentDiv1.style.backgroundColor = "brown";
  accentDiv2.style.backgroundColor = "brown";
} else if (num == 9) {
  accentDiv1.style.backgroundColor = "yellow";
  accentDiv2.style.backgroundColor = "yellow";
}
};
random.addEventListener("click", change);
