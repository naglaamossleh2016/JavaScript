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

// let mainObj = {
//   hasDiscount: true,
//   showMessage: function () {
//     return `User ${this.hasDiscount ? "" : "Don't"} have discount`;
//   },
// };
// console.log(mainObj.showMessage());

// let secondObj = Object.create(mainObj);
// secondObj.hasDiscount = false;
// console.log(secondObj.showMessage());

// let obj1 = {
//   prob1: "Value1",
//   prob2: "Value2",
//   method1: function () {
//     return "Method1 from obj1";
//   },
// };
// let obj2 = {
//   prob3: "Value3",
//   prob4: "Value4",
//   method2: function () {
//     return "Method1 from obj2";
//   },
// };
// let target = {
//   prob5: "Value5",
// };

// Object.assign(target, obj1, obj2, { prob6: "Value6" });
// console.log(target);
// let obj3 = Object.assign({}, target);
// console.log(obj3);
//////////////////////////////
// let user = {
//   userName: "Naglaa",
// };
// console.log(user);
// console.log(user.userName);

// console.log(delete user);
// console.log(delete user.userName);

// console.log(user);
// console.log(user.userName);
// //////////////////can not delete freeze object///////////
// let freezedObj = Object.freeze({ age: 37 });
// console.log(freezedObj);
// console.log(delete freezedObj);
// /////////////////////////////
// let emptyObj = {};
// Object.defineProperty(emptyObj, "prob", { value: 1, configurable: true });
// console.log(emptyObj);
// console.log(delete emptyObj.prob);
// console.log(emptyObj);

/////////////////////////////
// let userInfo = {
//   firstName: "Naglaa",
//   lastName: "Mossleh",
//   age: 37,
// };
// let infoData = "";
// for (let info in userInfo) {
//   infoData += `The User Data ${info} => ${userInfo[info]} `;
// }
// console.log(infoData);
// //console.log(document.getElementById("info"));
// document.getElementById("info").innerHTML = infoData;

//////////////////////////////////
// function phone(serial, color, price) {
//   this.serial = serial;
//   this.color = color;
//   this.price = price;
// }
// let phone1 = new phone(123, "Red", 500);
// let phone2 = new phone(456, "Black", 500);
// console.log(phone1);
// console.log(phone2);
///////////////////////new constructor///////////
function Phone(serial) {
  console.log(this);
  this.serial = serial;
}
let phone1 = new Phone(123);
let phone2 = new Phone();
let phone3 = Phone();
console.log(phone1 instanceof Phone);
console.log(phone2 instanceof Phone);
console.log(phone3 instanceof Phone);

console.log(phone1.constructor === Phone);

console.log(phone3.constructor === Phone); //error
