const display = document.querySelector(".display");

const clear = document.querySelector(".but1");
const invert = document.querySelector(".but2");
const mod = document.querySelector(".but3");
const div = document.querySelector(".but4");
const num7 = document.querySelector(".but5");
const num8 = document.querySelector(".but6");
const num9 = document.querySelector(".but7");
const mult = document.querySelector(".but8");
const num4 = document.querySelector(".but9");
const num5 = document.querySelector(".but10");
const num6 = document.querySelector(".but11");
const minus = document.querySelector(".but12");
const num1 = document.querySelector(".but13");
const num2 = document.querySelector(".but14");
const num3 = document.querySelector(".but15");
const plus = document.querySelector(".but16");
const num0 = document.querySelector(".but17");
const point = document.querySelector(".but18");
const equal = document.querySelector(".but19");

let actual;
let previous;
let sum;
let dif;
let prod;
let imp;
let operationDone = false;
let operationResult;
let operation;

num1.addEventListener("click", function () {
  if (operationDone === false) {
    display.innerHTML += "1";
    actual = parseFloat(display.innerHTML);
  } else {
    display.innerHTML = "";
    display.innerHTML += "1";
    actual = parseFloat(display.innerHTML);
    operationDone = false;
  }
});
num2.addEventListener("click", function () {
  if (operationDone === false) {
    display.innerHTML += "2";
    actual = parseFloat(display.innerHTML);
  } else {
    display.innerHTML = "";
    display.innerHTML += "2";
    actual = parseFloat(display.innerHTML);
    operationDone = false;
  }
});
num3.addEventListener("click", function () {
  if (operationDone === false) {
    display.innerHTML += "3";
    actual = parseFloat(display.innerHTML);
  } else {
    display.innerHTML = "";
    display.innerHTML += "3";
    actual = parseFloat(display.innerHTML);
    operationDone = false;
  }
});
num4.addEventListener("click", function () {
  if (operationDone === false) {
    display.innerHTML += "4";
    actual = parseFloat(display.innerHTML);
  } else {
    display.innerHTML = "";
    display.innerHTML += "4";
    actual = parseFloat(display.innerHTML);
    operationDone = false;
  }
});
num5.addEventListener("click", function () {
  if (operationDone === false) {
    display.innerHTML += "5";
    actual = parseFloat(display.innerHTML);
  } else {
    display.innerHTML = "";
    display.innerHTML += "5";
    actual = parseFloat(display.innerHTML);
    operationDone = false;
  }
});
num6.addEventListener("click", function () {
  if (operationDone === false) {
    display.innerHTML += "6";
    actual = parseFloat(display.innerHTML);
  } else {
    display.innerHTML = "";
    display.innerHTML += "6";
    actual = parseFloat(display.innerHTML);
    operationDone = false;
  }
});
num7.addEventListener("click", function () {
  if (operationDone === false) {
    display.innerHTML += "7";
    actual = parseFloat(display.innerHTML);
  } else {
    display.innerHTML = "";
    display.innerHTML += "7";
    actual = parseFloat(display.innerHTML);
    operationDone = false;
  }
});
num8.addEventListener("click", function () {
  if (operationDone === false) {
    display.innerHTML += "8";
    actual = parseFloat(display.innerHTML);
  } else {
    display.innerHTML = "";
    display.innerHTML += "8";
    actual = parseFloat(display.innerHTML);
    operationDone = false;
  }
});
num9.addEventListener("click", function () {
  if (operationDone === false) {
    display.innerHTML += "9";
    actual = parseFloat(display.innerHTML);
  } else {
    display.innerHTML = "";
    display.innerHTML += "9";
    actual = parseFloat(display.innerHTML);
    operationDone = false;
  }
});
num0.addEventListener("click", function () {
  if (operationDone === false) {
    display.innerHTML += "0";
    actual = parseFloat(display.innerHTML);
  } else {
    display.innerHTML = "";
    display.innerHTML += "0";
    actual = parseFloat(display.innerHTML);
    operationDone = false;
  }
});
point.addEventListener("click", function () {
  if (operationDone === false) {
    display.innerHTML += ".";
    actual = parseFloat(display.innerHTML);
  } else {
    display.innerHTML = "";
    display.innerHTML += ".";
    actual = parseFloat(display.innerHTML);
    operationDone = false;
  }
});

plus.addEventListener("click", function () {
  operationDone = true;
  operation = "+";
  console.log(`Actual number: ${actual}`);
  console.log(`Previous number: ${previous}`);
  if (previous === undefined) {
    sum = actual;
  } else {
    sum = previous + actual;
  }
  display.innerHTML = sum;
  previous = sum;
  actual = 0;
});
minus.addEventListener("click", function () {
  operationDone = true;
  operation = "-";
  console.log(`Actual number: ${actual}`);
  console.log(`Previous number: ${previous}`);
  if (previous === undefined) {
    dif = actual;
  } else {
    dif = previous - actual;
  }
  display.innerHTML = dif;
  previous = dif;
  actual = 0;
});
mult.addEventListener("click", function () {
  operationDone = true;
  operation = "x";
  if (previous === undefined) {
    prod = actual;
  } else {
    prod = previous * actual;
  }
  display.innerHTML = prod;
  previous = prod;
  actual = 1;
});
div.addEventListener("click", function () {
  operationDone = true;
  operation = "/";
  if (previous === undefined) {
    imp = actual;
  } else {
    imp = previous / actual;
  }
  display.innerHTML = imp;
  previous = imp;
  actual = 1;
});

equal.addEventListener("click", function () {
  operationDone = true;
  if (operation === "+") {
    sum = previous + actual;
    operationResult = sum;
    actual = 0;
  } else if (operation === "-") {
    dif = previous - actual;
    operationResult = dif;
    actual = 0;
  } else if (operation === "x") {
    prod = previous * actual;
    operationResult = prod;
    actual = 1;
  } else if (operation === "/") {
    imp = previous / actual;
    operationResult = imp;
    actual = 1;
  } else if ((operation = "none")) {
    operationResult = display.innerHTML;
  }
  display.innerHTML = operationResult;
  previous = operationResult;
  operation = "none";
});
