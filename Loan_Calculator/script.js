function calculateLoan() {
  const loanAmountEl = document.getElementById("loanAmount").value;
  const interestRateEl = document.getElementById("interestRate").value;
  const monthsToPayEl = document.getElementById("monthsToPay").value;

  const monthlyInterestAmount =
    (loanAmountEl * (interestRateEl / 100)) / monthsToPayEl;

  const monthlyPayment = (
    loanAmountEl / monthsToPayEl +
    monthlyInterestAmount
  ).toFixed(2);
  document.getElementById(
    "payment"
  ).innerText = `Monthly Payment : ${monthlyPayment}`;
}
