const btnEl = document.querySelector("#btn");
const birthdayEl = document.querySelector("#birthday");
const resetEl = document.querySelector("#result");

function calculateAge() {
  const birthday = birthdayEl.value;
  if (birthday === "") {
    resetEl.innerText = "Please Enter Your Birthday";
    alert("Please Enter Your Birthday");
  } else {
    const age = getAge(birthday);
    resetEl.innerText = `Your Age is ${age} ${age > 1 ? "Years" : "Year"}`;
  }
}
function getAge(birthday) {
  const currentDate = new Date();
  const birthDate = new Date(birthday);
  let age = currentDate.getFullYear() - birthDate.getFullYear();
  const month = currentDate.getMonth() - birthDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
}
btnEl.addEventListener("click", calculateAge);
