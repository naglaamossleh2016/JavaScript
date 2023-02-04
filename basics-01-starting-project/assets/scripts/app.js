const defaultValue = 0;
let currentResult = defaultValue;
let logEnteries = [];

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function displayValue(numberBerforeCal, operator, resultAfterCal) {
  const DescInput = `${numberBerforeCal} ${operator} ${resultAfterCal}`;
  outputResult(currentResult, DescInput);
}

function showLog(operation, intialValue, UserNum, summtion) {
  const logObject = {
    operation: operation,
    initialVal: intialValue,
    inputUser: UserNum,
    sum: summtion,
  };
  logEnteries.push(logObject);
  console.log(logEnteries);
}
function add() {
  const UserNum = getUserNumberInput();
  const intialValue = currentResult;
  currentResult += UserNum;
  displayValue(intialValue, "+", UserNum);
  showLog("+", intialValue, UserNum, currentResult);
}
function subtract() {
  const UserNum = getUserNumberInput();
  const intialValue = currentResult;
  currentResult -= UserNum;
  displayValue(intialValue, "-", UserNum);
  showLog("-", intialValue, UserNum, currentResult);
}
function multiply() {
  const UserNum = getUserNumberInput();
  const intialValue = currentResult;
  currentResult *= UserNum;
  displayValue(intialValue, "*", UserNum);
  showLog("*", intialValue, UserNum, currentResult);
}
function devision() {
  const UserNum = getUserNumberInput();
  const intialValue = currentResult;
  currentResult /= UserNum;
  displayValue(intialValue, "/", UserNum);
  showLog("/", intialValue, UserNum, currentResult);
}
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", devision);
