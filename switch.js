// if else
var color = "red";
if (color === "red") {
  console.log("You are red");
} else if (color === "blue") {
  console.log("You are blue");
} else if (color === "green") {
  console.log("You are green");
} else if (color === "ash") {
  console.log("You are ash");
} else {
  console.log("you have no color");
}

// Switch
//if else er faster version holo switch, eta if else er moto sob step check kore ore jai na, exact jeta mil ase ota tei jai. er por beak thakar karone easily oi case theke sorasori ber hoi jaite pare.

var color = "green";
switch (color) {
  case "green":
    console.log("You are green");
    break;
  case "red":
    console.log("You are red");
    break;
  case "yellow":
    console.log("You are yellow");
    break;
  case "white":
    console.log("You are white");
    break;
  default:
    console.log("You have no color");
}
