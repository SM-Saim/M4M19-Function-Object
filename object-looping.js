// array and object difference
var name = ["samir", "samad", "sagir", "siplu"];
var age = [22, 44, 52, 33];

var people = {
  samir: 22,
  samad: 44,
  sagir: 52,
  siplu: 33,
};

//Get all the property by using Loop
var people = {
  samir: 22,
  samad: 44,
  sagir: 52,
  siplu: 33,
};
var keys = Object.keys(people); //all key ber korlam
console.log(keys);

var values = Object.values(people); //all value ber korlam
console.log(values);
//1st option
for (i = 0; i < keys.length; i++) {
  var getTheValue = people[getKey];
  console.log(getKey, getTheValue);
}

//2nd option (for in loop)
for (var getKey in people) {
  var valueOfKey = people[getKey];
  console.log(getKey, valueOfKey);
}
