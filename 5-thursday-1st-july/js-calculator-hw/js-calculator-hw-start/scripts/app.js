// ! 💻 Remember when working in the browser, be sure to save the changes in this file, and refresh the browser window to run the code again.

// ! 👨‍🏫 Read the readme carefully, and practice using "window.prompt()" to gather user input

// * Write your code below!

/* Advanced Calculator
Implement the advanced calculator:

Functionality for 'power'
Functionality for 'square root'*/

// Create variable for calculater to be "on"
let calculate = true;
// Create loop that enables user input
while (calculate) {
// Welcome message
const calculate = window.confirm('Let\'s do some maths!')
// Prompt window for the first value (make sure that it allows decimals)
const firstInput = parseFloat(window.prompt('Enter your first number'));
// Prompt window for the second value (make sure that it allows decimals)
const secondInput = parseFloat(window.prompt('Enter your second number'));
// Prompt window for the mathematical selector
const symbol = (window.prompt('Would you like to: +, -, /, *'));
// 'if' statements for each symbol:
if (symbol === '+') {
    window.alert(firstInput + secondInput);
}
if (symbol === '-') {
    window.alert(firstInput - secondInput);
}
if (symbol === '/') {
    window.alert(firstInput / secondInput);
}
if (symbol === '*') {
    window.alert(firstInput * secondInput);
}
}