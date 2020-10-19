// Define the numbers and the operation here
let num1 = 2;
let num2 = 2;
let operation = "/";
// Write if-statements here

if (operation == "/") {
  console.log(`Division ${num1}${operation}${num2} = ${num1 / num2}`);
} else if (operation == "*") {
  console.log(`Multiplication ${num1} * ${num2} = ${num1 * num2}`);
} else if (operation == "+") {
  console.log(`Sum ${num1} + ${num2} = ${num1 + num2}`);
} else if (operation == "-") {
  console.log(`Subtraction ${num1} - ${num2} = ${num1 - num2}`);
} else if (operation == "%") {
  console.log(`Mod ${num1} % ${num2} = ${num1 % num2}`);
}
