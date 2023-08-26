var building = {
  floor: 7,
  lift: 2,
  FireExtension: 10,
  window: 40,
};
// Ex:2
var myLaptop = {
  brand: "asus",
  ram: "8GB",
  ssd: 512,
  os: "windows10Pro",
  color: "Black",
};
console.log(myLaptop);

// Ex:3
var myLaptop = {
  brand: "asus",
  ram: "8GB",
  ssd: 512,
  os: "windows10Pro",
  color: "Black",
};
console.log(myLaptop.ssd);
console.log(myLaptop.os);

// property value change
var myLaptop = {
  brand: "asus",
  ram: "8GB",
  ssd: 512,
  os: "windows10Pro",
  color: "Black",
};
console.log(myLaptop.ssd);
myLaptop.ssd = "1TB"; //set the property value
console.log(myLaptop.ssd);
