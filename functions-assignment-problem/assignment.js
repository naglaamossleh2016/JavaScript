const sayHello = (userName) => {
  console.log("Hi " + userName);
};
sayHello("Naglaa");
const DEFAULT_VALUE = "HI";
const greetUser1 = (userName, phrase = DEFAULT_VALUE) => {
  console.log(phrase + " " + userName);
};
greetUser1("Naglaa", "Hello");
greetUser1("noga");
const greetUser2 = () => {
  console.log("Hi Baby");
};
greetUser2();

const greetUser3 = (userName) => "hi " + userName;

console.log(greetUser3("ghghgh"));
/////////////////////////////
const value = function checkInput(...value) {
  console.log(value);
};
