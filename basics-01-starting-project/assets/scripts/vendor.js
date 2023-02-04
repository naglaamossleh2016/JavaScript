const userInput = document.getElementById("input-number");
const addBtn = document.getElementById("btn-add");
const subtractBtn = document.getElementById("btn-subtract");
const multiplyBtn = document.getElementById("btn-multiply");
const divideBtn = document.getElementById("btn-divide");

const currentResultOutput = document.getElementById("current-result");
const currentCalculationOutput = document.getElementById("current-calculation");

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}
const defaultValue = 0;
let currentResult = defaultValue;

function add() {
  currentResult = currentResult + parseInt(userInput.value);
  outputResult(currentResult, "");
}
addBtn.addEventListener("click", add);
