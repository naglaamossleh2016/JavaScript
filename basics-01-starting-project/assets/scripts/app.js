const defaultValue = 0;
let currentResult = defaultValue;

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function displayValue(numberBerforeCal, operator, resultAfterCal) {
  const DescInput = `${numberBerforeCal} ${operator} ${resultAfterCal}`;
  outputResult(currentResult, DescInput);
}

function add() {
  const UserNum = getUserNumberInput();
  const intialValue = currentResult;
  currentResult += UserNum;
  displayValue(intialValue, "+", UserNum);
}
function subtract() {
  const UserNum = getUserNumberInput();
  const intialValue = currentResult;
  currentResult -= UserNum;
  displayValue(intialValue, "-", UserNum);
}
function multiply() {
  const UserNum = getUserNumberInput();
  const intialValue = currentResult;
  currentResult *= UserNum;
  displayValue(intialValue, "*", UserNum);
}
function devision() {
  const UserNum = getUserNumberInput();
  const intialValue = currentResult;
  currentResult /= UserNum;
  displayValue(intialValue, "/", UserNum);
}
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", devision);
