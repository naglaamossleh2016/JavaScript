const defaultValue = 0;
let currentResult = defaultValue;
function getUserNumberInput() {
  return parseInt(userInput.value);
}
function add() {
  const UserNum = getUserNumberInput();
  const DescInput = `${currentResult} + ${UserNum}`;
  currentResult = currentResult + UserNum;
  outputResult(currentResult, DescInput);
}
addBtn.addEventListener("click", add);
