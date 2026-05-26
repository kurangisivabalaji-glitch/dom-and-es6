// let and const
let name = "Balaji";

const age = 19;

// Arrow Function
const showMessage = () => {

  return `My Name is ${name} and Age is ${age}`;

};

// Array Destructuring
const colors = ["Red", "Blue", "Green"];

const [firstColor] = colors;

console.log(firstColor);

// Spread Operator
const nums1 = [1,2];

const nums2 = [3,4];

const allNums = [...nums1, ...nums2];

console.log(allNums);

// DOM with ES6
const output = document.getElementById("output");

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {

  output.innerHTML = showMessage();

  output.style.color = "green";

  output.style.fontSize = "35px";

  document.body.style.background =
  "linear-gradient(135deg,#ff9a9e,#fad0c4)";

});