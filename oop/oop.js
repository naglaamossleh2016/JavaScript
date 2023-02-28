let user = {
  firstName: "Naglaa",
  lastName: "Mossleh",
  age: 37,
  address: {
    eg: "Egypt",
    usa: "california",
    ksa: "Riyadh",
    getAddress: () => `Main Address ${user.address.eg}`,
  },
  greet: function () {
    return `${user.firstName} ${user.lastName}`;
  },
  ageInDays: () => `get user age ${user.age}`,
};

let newObj={
  1:"One",
  2:"Two"
}

console.log(user.firstName);
console.log(user.lastName);
console.log(user.greet());
console.log(user.address.getAddress());
console.log(user["address"]["ksa"]);
console.log(user.age);
