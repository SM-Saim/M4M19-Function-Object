// Ex1:
function number(number1, number2) {
  console.log(number1, number2);
  var sum = number1 + number2;
  //   console.log(sum);
  return sum;
}
var total = number(200, 300); //return er valo ta ei function call er modde ase.
console.log(total);

//Ex 2
function singara(money) {
  var singaraPrice = 10;
  var singaraPabo = money / singaraPrice;
  return singaraPabo;
}
var takaDilam = 150;
var singaraPacchi = singara(takaDilam);
console.log("Ami Singara pabo", singaraPacchi);
