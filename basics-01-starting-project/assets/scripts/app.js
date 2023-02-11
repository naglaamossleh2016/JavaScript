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
function calculation(operator) {
  const UserNum = getUserNumberInput();
  if (
    (operator !== "ADD" &&
      operator !== "SUBTRACT" &&
      operator !== "MULTIPLY" &&
      operator !== "DIVIDE") ||
    !UserNum
  )
    return;

  const intialValue = currentResult;
  if (operator === "ADD") {
    currentResult += UserNum;
    operatorMath = "+";
  } else if (operator === "SUBTRACT") {
    currentResult -= UserNum;
    operatorMath = "-";
  } else if (operator === "MULTIPLY") {
    currentResult *= UserNum;
    operatorMath = "*";
  } else if (operator === "DIVIDE") {
    currentResult /= UserNum;
    operatorMath = "/";
  }
  displayValue(intialValue, operatorMath, UserNum);
  showLog(operatorMath, intialValue, UserNum, currentResult);
}
function add() {
  calculation("ADD");
}
function subtract() {
  calculation("SUBTRACT");
}
function multiply() {
  calculation("MULTIPLY");
}
function devision() {
  calculation("DIVIDE");
}
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", devision);
