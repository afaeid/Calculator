/* copyright © All rights reserved by MD Afaeid Sarker*/
const inputScreen = document.querySelector('.cal-inpt textarea');
const outputScreen = document.querySelector('.cal-inpt input');
var ansValue;

function clr(element) {
  inputScreen.value = '';
  outputScreen.value = '';
  inputScreen.style.fontSize = '45px';
}

function del() {
  inputScreen.value = inputScreen.value.slice(0, -1);
  preCalculate();
  lengthDecrease();
}

function display(num) {
  inputScreen.value += num;
  lengthIncrease();
  preCalculate();
}

function ans() {
  inputScreen.value += ansValue;

  if (ansValue == undefined) {
    ansValue = '';
    inputScreen.value += '';
    outputScreen.value = '';
  }

  preCalculate();
  lengthDecrease();
  lengthIncrease();
}

function preCalculate() {
  outputScreen.style.color = '#757575';
  outputScreen.value = eval(inputScreen.value);
  lengthDecrease();
  lengthIncrease();
}

function calculate() {
  outputScreen.style.color = '#000'
  if (inputScreen.value != 0) {
    try {
      outputScreen.value = eval(inputScreen.value);
      ansValue = outputScreen.value;
    } catch (err) {
      alert('Invalid number');
    }
  }
}

function root(num) {
  if (eval(inputScreen.value) == ansValue) {
    inputScreen.value = outputScreen.value + num;
    outputScreen.value = eval(inputScreen.value);
  } else {
    inputScreen.value += num;
  }
  preCalculate();
  console.log(outputScreen.style.color)
  lengthDecrease();
  lengthIncrease();
}

function lengthDecrease() {
  inputScreen.style.transition = 'font-size 0.2s linear';
  for (var x = 0; x <= inputScreen.value.length; x++) {
    if (inputScreen.value.length < '47') {
      inputScreen.style.fontSize = '20px';
    }
    if (inputScreen.value.length < '16') {
      inputScreen.style.fontSize = '30px'
    }
    if (inputScreen.value.length < '11') {
      inputScreen.style.fontSize = '45px'
    }
  }
}

function lengthIncrease() {
  inputScreen.style.transition = 'font-size 0.2s linear';
  for (var x = 0; x <= inputScreen.value.length; x++) {
    if (inputScreen.value.length > '10') {
      inputScreen.style.fontSize = '30px'
    }
    if (inputScreen.value.length > '15') {
      inputScreen.style.fontSize = '20px'
    }
    if (inputScreen.value.length > '46') {
      inputScreen.style.fontSize = '18px';
    }
  }
}

/* copyright © All rights reserved by MD Afaeid Sarker*/