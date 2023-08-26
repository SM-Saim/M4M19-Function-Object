// *parameter ek doroner special variable chinta korte pari.
// 1.jokon function ta call kora hobe tokon er maan set kora hobe.
// 2.ei variable ta shudu matro available function er vitore.  //Bright 80

function paraMeter(Bright) {
  console.log("Good Morning");
  console.log(Bright);
}
paraMeter(80);

// *Eta kintu kaj korbe na, karon function er bire parameter er out put call kora hoise.

// function paraMeter33(Bright) {
//   console.log("Good Morning");
// }
// console.log(Bright);
// paraMeter33(80);

// Chaile console er modde ekadik console k comma diea out put ber kora jai

function paraMeter11(money) {
  console.log("Taka disen", money);
  console.log("Ei nen singara");
}
paraMeter11(80);

// Abar function ta k call korar somoy jei value ta disi, oitar poriborte variable name o dea jai, tokon oi variabe er maan ta function er modde asbe.

function paraMeter22(money) {
  console.log("Taka disen", money);
  console.log("Ei nen singara");
}
var taka = 100;
paraMeter22(taka);

//2 ta parameter declare kora jai ek sathe
function paraMeter2(watch, sunglass) {
  console.log("watch ar sunglass er price", watch, sunglass);
  console.log("Total Price", watch + sunglass);
}
paraMeter2(500, 400);

//akon jehetu parameter er sob value dei nai, se jonno jegula  khali ogula undefined dekabe.
function number(a, b, c, d, e) {
  console.log("number gula holo", a, b, c, d, e);
  console.log("Total sum", a + b + c + d + e);
}
number(500, 400);
