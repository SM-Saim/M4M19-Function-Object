// function structure
// function functionName(parameter1,parameter2)
// {
//      function body
//      return
// }
// var value= functionName(parameter value)
// console.log(value);

// Ex:1
function averageNumbers(assignment1, assignment2, assignment3) {
  var total3 = assignment1 + assignment2 + assignment3;
  var average = total3 / 3;
  return average;
}
var assignment1 = 60;
var assignment2 = 56;
var assignment3 = 60;
var totalMarks = averageNumbers(assignment1, assignment2, assignment3);
console.log("You total avg is", totalMarks);

// Ex 2
function number(num1, num2, num3) {
  console.log(num1, num2, num3);
  const totalNum = num1 + num2 + num3;
  return totalNum;
}
const motNumber1 = number(33, 22, 66);
const motNumber2 = number(50, 50, 44);
const motNumber3 = number(100, 100, 77);
const totalz = number(motNumber1, motNumber2, motNumber3);
console.log(totalz);
