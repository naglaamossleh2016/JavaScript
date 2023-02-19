const model = document.querySelector(".modal");
const addBtn = document.querySelector("header button");
const backDrop = document.getElementById("backdrop");
const cancelBtn = document.querySelector(".btn--passive");

function toggleModel() {
  model.classList.toggle("visible");
  backdropHandler();
}
function backdropHandler() {
  back.classList.toggle("visible");
}
function cancelBtnHandler() {
  toggleModel();
}
addBtn.addEventListener("click", toggleModel);
cancelBtn.addEventListener("click", cancelBtnHandler);
backDrop.addEventListener("click", cancelBtnHandler);
