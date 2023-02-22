const model = document.querySelector(".modal");
const addBtn = document.querySelector("header button");
const backDrop = document.getElementById("backdrop");
const cancelBtn = document.querySelector(".btn--passive");
const inputUsers = document.querySelectorAll("input");
const addMovieDataBtn = document.querySelector(".btn--success");
const sectionText = document.querySelector("#entry-text");
const movies = [];
/////////////////
function updateUI() {
  if (movies.length === 0) {
    sectionText.style.display = "block";
  } else {
    sectionText.style.display = "none";
  }
}
function renderNewMovieEl(title, imageUrl, rate) {
  const newMovieEl = document.createElement("li");
  newMovieEl.className = "movie-element";
  newMovieEl.innerHTML = `<div class="movie-element__info"><img src="${imageUrl}" alt="${title}"/></div>
  <div  class="movie-element__info"><h2>${title}</h2><p>${rate}/5 Stars</p></div>
  `;
  const listRoot = document.getElementById("movie-list");
  listRoot.append(newMovieEl);
}
function toggleModel() {
  model.classList.toggle("visible");
  backdropHandler();
}
function backdropHandler() {
  backDrop.classList.toggle("visible");
}
function clearMovieData() {
  for (const inputuser of inputUsers) inputuser.value = "";
}
function cancelBtnHandler() {
  toggleModel();
  clearMovieData();
}

function addMovieData() {
  const titleUser = inputUsers[0].value;
  const imageUrl = inputUsers[1].value;
  const ratingValue = inputUsers[2].value;
  if (
    titleUser.trim() === "" ||
    imageUrl.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert("Enter a valid value (Rating value should be between 1 and 5)");
    return;
  }
  const moviesData = {
    title: titleUser,
    image: imageUrl,
    rating: ratingValue,
  };
  movies.push(moviesData);
  console.log(movies);
  updateUI();
  renderNewMovieEl(titleUser, imageUrl, ratingValue);
  toggleModel();
  clearMovieData();
}
addBtn.addEventListener("click", toggleModel);
cancelBtn.addEventListener("click", cancelBtnHandler);
backDrop.addEventListener("click", cancelBtnHandler);
addMovieDataBtn.addEventListener("click", addMovieData);
