var number = Array.from(document.getElementsByClassName('number'));

var operator = Array.from(document.getElementsByClassName('operator'));
var inputObj = document.getElementById('window');
var inputOp = document.getElementById('op-window');
var borrar = document.getElementById('delete');
var resulta = document.getElementById('result');
var equal = document.getElementById('eq-operator');

var selectOperator;
var firstNumber;
var firstOperatorNumber;
var secondNumber;
var result;

function touchNumber(){
number.forEach((numberElement) => {
  numberElement.addEventListener('click', function(event){

    var inputValue = inputObj.value;
    inputValue += numberElement.value;
    inputObj.value = inputValue;
    firstNumber = inputObj.value;
    var tt = parseInt(firstNumber);
    firstNumber = tt;

  })
      return numberElement.value;
})

}

function getSecondnumber(){
  if(firstOperatorNumber !== null){
    inputObj.value = "";

  }
}

function touchOperator(){
  operator.forEach((operatorElement) =>{
    operatorElement.addEventListener('click', function(event){
      var inputValue = inputOp.value;
      inputValue += operatorElement.value;
      inputOp.value = inputValue;

      selectOperator = inputOp.value;
      firstOperatorNumber = inputOp.value;
      console.log(typeof firstOperatorNumber)

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
   result.value = "";
});

}

function init(){
  touchNumber();
  reset();
  touchOperator();
  getSecondnumber();
  final();
}
init();
