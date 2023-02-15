let $toggler = document.getElementById('toggler'),
    $calculator = document.querySelector('.calculator');

if($calculator.classList.contains('dark')) {
  $toggler.querySelector('#light').style.display = 'block';
  $toggler.querySelector('#dark').style.display = 'none';
} else {
  $toggler.querySelector('#light').style.display = 'none';
  $toggler.querySelector('#dark').style.display = 'block';
}

$toggler.addEventListener('click', function() {
  $calculator.classList.toggle('dark');
  
  if($calculator.classList.contains('dark')) {
    $toggler.querySelector('#light').style.display = 'block';
    $toggler.querySelector('#dark').style.display = 'none';
  } else {
    $toggler.querySelector('#light').style.display = 'none';
    $toggler.querySelector('#dark').style.display = 'block';
  }
})


// make so the numbers fit in the calculator



// getting all the buttons
let buttons = document.querySelectorAll(".calculator-button");
// for setting button values
let buttonValues = ["C", "/", "*", "backspace", "7", "8", "9", "-", "4", "5", "6", "+", "1", "2", "3", "=", "%", "0", "."];

//getting the displays
let display1 = document.querySelector(".calculator-operation");
let display2 = document.querySelector(".calculator-operation-result");

// placeholder
let display1Val = "";
let display2Val = "0";

// first input variable
let firstInput = true;
// if calculate function was used
let calculated = false;

// setting dummy displays
display1.innerHTML = "";
display2.innerHTML = "0";

// adds commas every third digit
function addCommas() {
  display2ValComma = display2Val;
  return display2ValComma.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  
}
// puts the numbers on the page
function setDisplay() {
  display1.innerHTML = display1Val;
  display2.innerHTML = addCommas();
}
// function to check if the display1 already contains an action
function checkActions() {
  return display1Val.includes("/") || display1Val.includes("*") || display1Val.includes("-") || display1Val.includes("+") || display1Val.includes("%");
}

// calculation function
function calculate() {
  calculated = true;
  return eval(display1Val).toString();
}
// changing font size so it does leave the borders of the calculator
// function fontSize() {
//   if(display2Val.length == 10) {
//     display2.style.fontSize = "xx-large";
//   } else if (display2Val.length == 10) {
//     display2.style.fontSize = "x-large"
//   }
// }

//adding event listeners on every button
for(let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    if(Number.isInteger(parseInt(buttonValues[i]))) { // if button is a number
      if(display2Val.length == 16) {

      } else if(firstInput) {
        display2Val = `${buttonValues[i]}`;
        firstInput = false;
      } else {
        display2Val += `${buttonValues[i]}`;
      }
      // fontSize();
    } else if(buttonValues[i] == "C") { // if the button is C
      display2Val = "0";
      display1Val = "";
      firstInput = true;
    } else if(buttonValues[i] == "/" || buttonValues[i] == "*" || buttonValues[i] == "-" || buttonValues[i] == "+" || buttonValues[i] == "%") { // if the button is an action button
      if(calculated) {
        display1Val = display2Val;
        display1Val += ` ${buttonValues[i]} `;
        firstInput = true;
        calculated = false;
      } else if(checkActions() && !firstInput) {
        display2Val = eval(`${display1Val}${display2Val}`).toString();
        display1Val = display2Val;
        display1Val += ` ${buttonValues[i]} `;
        firstInput = true;
      } else if(!firstInput) {
        display1Val += display2Val;
        display1Val += ` ${buttonValues[i]} `;
        firstInput = true;
      } else {
        display1Val = display2Val;
        display1Val += ` ${buttonValues[i]} `;
      }
    } else if(buttonValues[i] == "backspace") { // if the button is backspace
      display2Val = display2Val.slice(0, -1);
      if(display2Val.length == 0) {
        display2Val = "0";
        firstInput = true;
      }
    } else if(buttonValues[i] == ".") { // if the button is .
      if(firstInput) {
        display2Val = `0${buttonValues[i]}`;
        firstInput = false;
      } else if(!firstInput && !display2Val.includes(".")) {
        display2Val += `${buttonValues[i]}`;
      }
    } else if(buttonValues[i] == "=") { // if the button is =
      let tempVal = "";
      if(calculated) {

      } else {
        display1Val += display2Val;
        display2Val = calculate();
        firstInput = true;
        // display1Val += ` ${buttonValues[i]} `;
      }
    }
    
    setDisplay();
  })
}
