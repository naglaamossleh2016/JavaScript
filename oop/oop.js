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
// function Phone(serial) {
//   console.log(this);
//   this.serial = serial;
// }
// let phone1 = new Phone(123);
// let phone2 = new Phone();
// let phone3 = Phone();
// console.log(phone1 instanceof Phone);
// console.log(phone2 instanceof Phone);
// console.log(phone3 instanceof Phone);

// console.log(phone1.constructor === Phone);

// console.log(phone3.constructor === Phone); //error
///////////////////////////////////
// function User(fName, lName, age) {
//   this.fName = fName;
//   this.lName = lName;
//   this.age = age;
//   this.fullName = function () {
//     return `Hello User ${this.fName} ${this.lName}`;
//   };
//   this.ageInDays = function () {
//     return `Age in days ${this.age * 365}`;
//   };
// }

// let user1 = new User("Naglaa", "Mossleh", "37");
// let user2 = new User("Ali", "Mohammed", "30");
// console.log(user1.ageInDays());
// console.log(user2.fullName());
///////////////////////////////////////
// function UserData(name, email, age, showEmail) {
//   this.name = name;
//   this.email = email;
//   this.age = age;
//   this.showEmail = function () {
//     if (showEmail === true) {
//       return `Your email ${this.email}`;
//     } else {
//       return "Data is private";
//     }
//   };
//   this.updateName = function (newName) {
//     if (this.age > 18) {
//       this.name = newName;
//     } else {
//       console.log("You are under age");
//     }
//   };
// }
// let user1 = new UserData("naglaa", "Naglaa.mossleh@gmail.com", 10, false);
// console.log(user1.showEmail());
// user1.updateName("Nagwa");
// console.log(user1.name);
/////////////////built in function//////////////
Object.prototype.getData = function () {
  return "UserData";
};
let obj1 = { a: 1, b: 2 };
console.log(obj1);
