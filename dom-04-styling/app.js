const button = document.querySelector("button");
const section = document.querySelector("section");
button.addEventListener("click", () => {
  section.classList.toggle("invisible");
});
