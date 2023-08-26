function foo() {
  console.log("foo");
  function bar() {
    console.log("bar");
  }
  bar();
}
foo();

// pratice 2

function make_avg(num1, num2, num3) {
  console.log(num1, num2, num3);
  var sum = num1 + num2 + num3;
  var average = sum / 3;
  return average;
}
var total = make_avg(5, 4, 1);
console.log(total);

// practice 4 has parameter, no return
function odd_even(value) {
  if (value % 2 == 0) {
    console.log("Its even");
  } else {
    console.log("Odd");
  }
}
odd_even(32);

// practice 4
function odd_even2(value) {
  if (value % 2 == 0) {
    return "Its even";
  } else {
    return "It's odd";
  }
}
var all = odd_even2(33);
console.log(all);
