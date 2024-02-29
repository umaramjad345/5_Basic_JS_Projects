const billEl = document.getElementById("bill");
const tipRateEl = document.getElementById("tip");
const totalEl = document.getElementById("total");
const calculateEl = document.getElementById("calculate");
function calculateTip() {
  const billAmount = billEl.value;
  const tipAmount = tipRateEl.value;
  const totalAmount = billAmount * ((1 + tipAmount) / 100);
  totalEl.innerText = totalAmount;
}
calculateEl.addEventListener("click", calculateTip);
