const display = document.getElementById("display");
const calculator = document.querySelector(".calculator");

let expression = "";

calculator.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;

  const value = e.target.innerText;

  if (value === "AC") {
    expression = "";
    display.value = "0";
  } 
  else if (value === "DEL") {
    expression = expression.slice(0, -1);
    display.value = expression || "0";
  } 
  else if (value === "=") {
    try {
      expression = eval(expression).toString();
      display.value = expression;
    } catch {
      display.value = "Error";
      expression = "";
    }
  } 
  else {
    expression += value;
    display.value = expression;
  }
});

