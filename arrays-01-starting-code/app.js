const numbers = [1, 2, 3];
const arrayEl = ["Naglaa", "Abo Bakr"];
arrayEl.push("Mossleh"); // insert element in the last postion of array
arrayEl.unshift("Eng"); //insert element in the first postion
console.log(arrayEl.pop()); //remove last element
console.log(arrayEl.shift()); //remove first element
console.log(arrayEl);
arrayEl[1] = "Fawi";
console.log(arrayEl); //replace element in specifed postion
arrayEl.splice(1, 0, "Om Hussien"); //insert element in specified index
console.log(arrayEl);
arrayEl.splice(0, 3);
console.log(arrayEl);
