const inputScreen = document.querySelector('.cal-inpt textarea');
const outputScreen = document.querySelector('.cal-inpt input');
var ansValue;

function clr(element){
  inputScreen.value = '';
  outputScreen.value = '';
  inputScreen.style.fontSize = '45px';
}
function del(){
  inputScreen.value = inputScreen.value.slice(0,-1);
  lengthDecrease();
}
function display(num){
 inputScreen.value += num;
 lengthIncrease();
}
function ans(){
   inputScreen.value += ansValue;
 lengthDecrease();
 lengthIncrease();
}
function calculate (){
 if(inputScreen.value != 0){
  try{
    outputScreen.value = eval(inputScreen.value);
    ansValue = outputScreen.value;
  }catch (err){
    alert('Invalid number');
  }
 }
}
function root(){
if(outputScreen.value == eval(inputScreen.value) ** 0.5){
  inputScreen.value = outputScreen.value;
}
 if(inputScreen.value != 0){
  try{
 calResult = eval(inputScreen.value);
 outputScreen.value = calResult ** 0.5;
 ansValue = outputScreen.value;
  }
  catch(err){
    alert('Invalid number')
  }
 }
 lengthDecrease();
 lengthIncrease();
}
function lengthDecrease(){
inputScreen.style.transition = 'font-size 0.2s linear';
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
function lengthIncrease(){
inputScreen.style.transition = 'font-size 0.2s linear';
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