// var myP = document.createElement("p");
// myText = document.createTextNode("This is a new paragraph");
// myP.appendChild(myText);
// document.body.appendChild(myP);
// /////////////////get element from document///////////
// var element = document.getElementById("test");

// element.innerHTML = "Changed by javascript";

// var elementByCLass = document.getElementsByClassName("className");
// console.log(elementByCLass.length);

// var elementByTag = document.getElementsByTagName("p");
// elementByTag[0].innerHTML = "New element changed by javascript";

// var selector = document.querySelector("div");
// selector.innerHTML = "The first div changed by javascript";

// var selectors = document.querySelectorAll("p");
// console.log(selectors.length);

////////////////////
// var test = document.getElementById("test");
// // test.innerHTML = document.title;
// // for (let i = 0; i < document.images.length; i++) {
// //   test.innerHTML += "  " + document.images[i].src;
// // }
// var showform = document.getElementById("showForm");
// // showform.innerHTML = document.forms[0].input2.type;
// showform.innerText = document.body.innerText;
//////////////////Get and set dom content

// var myImg = document.querySelector("img");
// if (myImg.hasAttribute("alt")) {
//   console.log("Has attribute");
//   if ((myImg.alt = " ")) {
//     myImg.removeAttribute("alt");
//   }
// }
//////////////////////////
// var myDiv = document.querySelector("div");
// console.log(myDiv.classList.length);
// if (myDiv.classList.contains("hasClass")) {
//   console.log("It have this class");
// } else {
//   console.log("It does not have this class");
// }
// console.log(myDiv.classList);
/////////////assignment
// var myP = document.querySelector("p");
// var myBtn = document.querySelector("button");
// var showDiv = document.querySelector(".showInfo");
// if (myP.classList.contains(myBtn.textContent)) {
//   showDiv.textContent = myBtn.textContent;
// }
var myP = document.querySelector("p");
var myBtn = document.querySelector("button");
myBtn.onclick = function () {
  myP.classList.toggle("hidden");
};
