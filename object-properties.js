var myShoppingCart = {
  books: 23,
  headphone: 2,
  ups: 1,
  pen: 3,
  snikkers: 4,
};
console.log(myShoppingCart);
// 1. 1st way to get the value of a specific property
console.log(myShoppingCart.pen);

// 2. 2nd Alternative way (get the value of a specific property)
var value = myShoppingCart["pen"];
console.log(value);

// 3. 3rd Alternative way (get the value of a specific property)
var getValue = "headphone";
var getHeadphones = myShoppingCart[getValue];
console.log(getHeadphones);

// 1. set the property value
myShoppingCart.headphone = 10;
console.log(myShoppingCart);

// 2. set the property value
myShoppingCart["ups"] = 4;
console.log(myShoppingCart);

// 3. set the property value
var newValue = "books";
myShoppingCart[newValue] = 100;

console.log(myShoppingCart);

// print all the keys only
var onlyKey = Object.keys(myShoppingCart);
console.log(onlyKey);

// print all the values only
var onlyValues = Object.values(myShoppingCart);
console.log(onlyValues);
