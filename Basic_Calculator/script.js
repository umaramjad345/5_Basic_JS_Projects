const buttonEls = document.querySelectorAll("button");
const inputEl = document.getElementById("result");

for (let i = 0; i < buttonEls.length; i++) {
  buttonEls[i].addEventListener("click", () => {
    const buttonVal = buttonEls[i].textContent;
    if (buttonVal === "C") {
      clearResult();
    } else if (buttonVal === "=") {
      calculate();
    } else {
      appendValue(buttonVal);
    }
  });
}
function clearResult() {
  inputEl.value = "";
}
function calculate() {
  inputEl.value = eval(inputEl.value);
}
function appendValue(buttonVal) {
  inputEl.value += buttonVal;
}
