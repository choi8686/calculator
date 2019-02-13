var number = Array.from(document.getElementsByClassName('number'));
var operator = document.getElementsByClassName('operator');
var inputObj = document.getElementById('window');
var borrar = document.getElementById('delete');

function touchNumber(){
number.forEach((numberElement) => {
  numberElement.addEventListener('click', function(event){
    var inputValue = inputObj.value;
    inputValue += numberElement.value;
    inputObj.value = inputValue;
    return numberElement.value;

    if(value=="=")
  })
})

}

function reset(){
  borrar.addEventListener('click', function(event){
   inputObj.value = "";
});

}

function init(){
  touchNumber();
  reset();

}
init();
