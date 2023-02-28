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

let obj1 = {
  prob1: "Value1",
  prob2: "Value2",
  method1: function () {
    return "Method1 from obj1";
  },
};
let obj2 = {
  prob3: "Value3",
  prob4: "Value4",
  method2: function () {
    return "Method1 from obj2";
  },
};
let target = {
  prob5: "Value5",
};

Object.assign(target, obj1, obj2, { prob6: "Value6" });
console.log(target);
let obj3 = Object.assign({}, target);
console.log(obj3);
