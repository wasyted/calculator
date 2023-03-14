function play() {
  var audio = document.getElementById("audio");
  audio.currentTime = 0;
  audio.volume = 0.05;
  audio.play();
}

const calculator = () =>{

  function clickAdd(){
    operator = "+";
    if (auxNumber == ""){
      firstNumber = accumulator;
    }
    else{
      firstNumber = auxNumber;
    }
    display.textContent = `${firstNumber}`;
    selectSecondNumber();
    play();
  }
  plus.addEventListener('click',clickAdd);

  function clickSubstract(){
    operator = "-";
    if (auxNumber == ""){
      firstNumber = accumulator;
    }
    else{
      firstNumber = auxNumber;
    }
    display.textContent = `${firstNumber}`;
    selectSecondNumber();
    play();
  }
  minus.addEventListener('click',clickSubstract);

  function clickMultiply(){
    operator = "*";
    if (auxNumber == ""){
      firstNumber = accumulator;
    }
    else{
      firstNumber = auxNumber;
    }
    display.textContent = `${firstNumber}`;
    selectSecondNumber();
    play();
  }
  asterisk.addEventListener('click',clickMultiply);

  function clickDivide(){
    operator = "/";
    if (auxNumber == ""){
      firstNumber = accumulator;
    }
    else{
      firstNumber = auxNumber;
    }
    display.textContent = `${firstNumber}`;
    selectSecondNumber();
    play();
  }
  slash.addEventListener('click',clickDivide);

  const selectSecondNumber = () => {
    auxNumber = "";
  }

  const operate = () => {
    play();
    secondNumber = auxNumber;
    display.textContent = `${secondNumber}`;
    if (operator == "+"){
      accumulator += Number(firstNumber)+Number(secondNumber);
      firstNumber = accumulator;
      auxNumber="";
      secondNumber = "";
      display.textContent = `${accumulator.toFixed(4)}`;
      
    }
    else if (operator == "-"){
      accumulator = Number(firstNumber)-Number(secondNumber)
      secondNumber = "";
      firstNumber = accumulator;
      auxNumber="";
      display.textContent = `${accumulator.toFixed(4)}`;
    }
    else if (operator == "*"){
      accumulator = Number(firstNumber)*Number(secondNumber)
      secondNumber = "";
      firstNumber = accumulator;
      auxNumber="";
      display.textContent = `${accumulator.toFixed(4)}`
    }
    else if (operator == "/"){
      if (secondNumber != 0){
        accumulator = Number(firstNumber)/Number(secondNumber)
        secondNumber = "";
        auxNumber="";
        display.textContent = `${accumulator.toFixed(4)}`
      }
      else{
        display.textContent = "ERROR: Can't divide by zero!"
      }
    }
  }
  equal.addEventListener('click',operate);
  
}

const one = document.getElementById("one");
one.addEventListener('click',()=>{
  auxNumber += "1";
  accumulator = 0;
  display.textContent = `${auxNumber}`;
  play();
});

const two = document.getElementById("two");
two.addEventListener('click',()=>{
  auxNumber += "2";
  accumulator = 0;
  display.textContent = `${auxNumber}`;
  play();
});
const three = document.getElementById("three");
three.addEventListener('click',()=>{
  auxNumber += "3";
  accumulator = 0;
  display.textContent = `${auxNumber}`;
  play();
});

const four = document.getElementById("four");
four.addEventListener('click',()=>{
  auxNumber += "4";
  accumulator = 0;
  display.textContent = `${auxNumber}`;
  play();
});

const five = document.getElementById("five");
five.addEventListener('click',()=>{
  auxNumber += "5";
  accumulator = 0;
  display.textContent = `${auxNumber}`;
  play();
});

const six = document.getElementById("six");
six.addEventListener('click',()=>{
  auxNumber += "6";
  accumulator = 0;
  display.textContent = `${auxNumber}`;
  play();
});

const seven = document.getElementById("seven");
seven.addEventListener('click',()=>{
  auxNumber += "7";
  accumulator = 0;
  display.textContent = `${auxNumber}`;
  play();
});

const eight = document.getElementById("eigth");
eight.addEventListener('click',()=>{
  auxNumber += "8";
  accumulator = 0;
  display.textContent = `${auxNumber}`;
  play();
});

const nine = document.getElementById("nine");
nine.addEventListener('click',()=>{
  auxNumber += "9";
  accumulator = 0;
  display.textContent = `${auxNumber}`;
  play();
});

const zero = document.getElementById("zero");
zero.addEventListener('click',()=>{
  auxNumber += "0";
  accumulator = 0;
  display.textContent = `${auxNumber}`;
  play();
});

const dot = document.getElementById("dot");
dot.addEventListener('click',()=>{
  if (auxNumber.includes(".")==false){
    auxNumber += ".";
    display.textContent = `${auxNumber}`;
  }
  display.textContent = `${auxNumber}`;
  play();
});

const clear = document.getElementById("clear");
clear.addEventListener('click',()=>{
  firstNumber="";
  secondNumber="";
  accumulator = 0;
  auxNumber = "";
  display.textContent = "0";
  play();
})

let auxNumber = "";
var firstNumber = "";
let secondNumber = "";
let operator = "";
let accumulator = 0;


const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const asterisk = document.getElementById("asterisk");
const slash = document.getElementById("slash");
const equal = document.getElementById("operate")


const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const display = document.querySelector(".display");


calculator();
