var number = Array.from(document.getElementsByClassName('number'));
var operator = Array.from(document.getElementsByClassName('operator'));
var inputObj = document.getElementById('window');
var inputOp = document.getElementById('op-window');
var borrar = document.getElementById('delete');
var resulta = document.getElementById('result');
var equal = document.getElementById('eq-operator');

//var selectOperator;
var firstNumber;
//var firstOperatorNumber;
var secondNumber;

var result;

function touchNumber(){
number.forEach((numberElement) => {
  numberElement.addEventListener('click', function(event){

    var inputValue = inputObj.value;
    inputValue += numberElement.value;
    inputObj.value = inputValue;
    firstNumber = inputObj.value;
    var num1 = parseFloat(firstNumber);
    firstNumber = num1;
    if(inputOp.value !== ""){
        inputObj.value = "";
    }

  })
      return numberElement.value;
})

}

function touchOperator(){
  operator.forEach((operatorElement) =>{
    operatorElement.addEventListener('click', function(event){
      inputOp.value = operatorElement.value;

    })
  return operatorElement.value;
  })

}

function final(){

}

function reset(){
  borrar.addEventListener('click', function(event){
   inputObj.value = "";
   inputOp.value = "";
  firstNumber = undefined;
});

}

function init(){
  touchNumber();
  reset();
  touchOperator();

  final();
}
init();
