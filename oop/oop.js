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
///////prototype
// function User(name){
//   this.name=name;
//   if(!(this instanceof User))
//   throw new Error("You Must Use New Keyword");
// }
// let user1=new User("Naglaa");
// let user2=User("HI")
// console.log(User.prototype);
// // console.log(user1.prototype)
// console.log(user1);
//////////// class
// class User{
//   constructor(name,email){
//     this.name=name;
//     this.email=email;
//   }
//   sayHello() {
//     return `Hello ${this.name}`;
//   }
//   showEmail(){
//     return `My Email ${this.email}`;
//   }
// }
// let user1=new User("Naglaa","n@gmail.com");
// console.log(user1);
///////////////static class
// class User {
//   static counter = 0;
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//     User.counter++;
//   }
//   sayHello() {
//     return `Hello User ${this.name}`;
//   }
//   showEmail() {
//     return `User Email ${this.email}`;
//   }
//   static objectNum = function getcounter() {
//     return `${User.counter} object created`;
//   };
// }

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
// Object.prototype.getData = function () {
//   return "UserData";
// };
// let obj1 = { a: 1, b: 2 };
// console.log(obj1);

// String.prototype.zFill = function (width) {
//   let result = this;
//   while (result.length < width) {
//     result = `0${result}`;
//   }
//   return result;
// };
// String.prototype.sayILoveYou = function () {
//   return `I Love You ${this}`;
// };
// console.log("123".zFill(5));
// console.log("naglaa".sayILoveYou());
//////get and set////////////////
class User {
  constructor(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
  }
  get showName() {
    return `Hello user ${this.name}`;
  }
  showEmail() {
    return `User Email ${this.email}`;
  }
  set userAge(newAge) {
    this.age = newAge;
  }
}
let user1 = new User("Naglaa", "a@gmail.com", 37);
console.log(user1.showName);
user1.userAge = 35;
console.log(user1.age);
