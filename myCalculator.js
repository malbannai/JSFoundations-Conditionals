let num1 = 10;
let num2 = 5;
let sum = " + ";
let mult = " * ";
let sub = " - ";
let div = " / ";
let mod = " % ";

console.log(`Sum ${num1}${sum}${num2} = ${num1 + num2}`);
console.log(`Sum ${num1}${mult}${num2} = ${num1 * num2}`);

if (num1 > num2) {
  console.log(`Sum ${num1}${mod}${num2} = ${num1 % num2}`);
  console.log(`Sum ${num1}${sub}${num2} = ${num1 - num2}`);
  console.log(`Sum ${num1}${div}${num2} = ${num1 / num2}`);
} else {
  console.log(`Sum ${num2}${mod}${num1} = ${num2 % num1}`);
  console.log(`Sum ${num2}${sub}${num1} = ${num2 - num1}`);
  console.log(`Sum ${num2}${div}${num1} = ${num2 / num1}`);
}

// Now depending on the simbule
// Just trying switch

num3 = 4;
num4 = 4;

switch (sum) {
  case "+":
    console.log(`Sum ${num3}${sum}${num4} = ${num4 + num3}`);
    break;
  case "*":
    console.log(`Sum ${num3}${sum}${num4} = ${num4 * num3}`);
    break;
  default:
    console.log(`Nothing ... lets go home 😂`);
}
