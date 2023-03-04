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
var test = document.getElementById("test");
// test.innerHTML = document.title;
for (let i = 0; i < document.images.length; i++) {
  test.innerHTML += "  " + document.images[i].src;
}
var showform = document.getElementById("showForm");
showform.innerHTML = document.forms[0].input2.type;
