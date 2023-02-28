// let obj = {
//   1: "one",
//   2: "two",
//   name: "naglaa",
// };
// let userName = "name";
// console.log(obj[userName]);
// console.log(obj[1]);
// //////////////////////////////////
// let user = new Object();
// user.firstName = "Tamem";
// user.lastName = "Mohamed";
// user.age = 3;
// user.getUserData = function () {
//   return `Full Name ${user.firstName} ${user.lastName}`;
// };
// console.log(user.getUserData());

let mainObj = {
  hasDiscount: true,
  showMessage: function () {
    return `User ${this.hasDiscount ? "" : "Don't"} have discount`;
  },
};
console.log(mainObj.showMessage());

let secondObj = Object.create(mainObj);
secondObj.hasDiscount = false;
console.log(secondObj.showMessage());
