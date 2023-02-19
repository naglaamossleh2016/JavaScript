const button = document.querySelector("button");
const section = document.querySelector("section");
button.addEventListener("click", () => {
  section.classList.toggle("invisible");
});
const h2 = document.createElement("h2");
section.appendChild(h2);
h2.textContent = "H2 Heading";
h2.style.backgroundColor = "black";
