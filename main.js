const inputScreen = document.querySelector('.cal-inpt textarea');
const outputScreen = document.querySelector('.cal-inpt input');
inputScreen.addEventListener('input', ()=>{
  lengthDecrease();
  lengthIncrease();
})
function clr(element){
// inputScreen.value = '';

  inputScreen.value = '';
outputScreen.style.visibility = 'hidden';
  // outputScreen.value = '';
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
 if(outputScreen.value != 0){
   inputScreen.value += outputScreen.value;
   
 }else{
   alert('Please, calculate a problem at first.')
}
 lengthDecrease();
 lengthIncrease();
  inputScreen.classList.remove('showAns')

}
function calculate (){
 if(inputScreen.value != 0){
  try{
    outputScreen.value = eval(inputScreen.value);
    outputScreen.style.visibility = 'visible';
  }catch (err){
    clr();
    alert('Invalid number');
  }
 }
}
function root(){
if(outputScreen.value != 0 && inputScreen.value != 0){
  inputScreen.value = outputScreen.value;
}
 if(inputScreen.value != 0){
  try{
 calResult = eval(inputScreen.value);
 outputScreen.value = calResult ** 0.5;
 outputScreen.style.visibility = 'visible';
  }catch(err){
    clr();
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