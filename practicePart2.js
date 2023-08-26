var signal = "red";
if (signal === "red") {
  console.log("You may be in danger");
} else if (signal === "yellow") {
  console.log("You should stop");
} else {
  console.log("You should cross the road");
}

// switch
var signal = "red";
switch (signal) {
  case "red":
    console.log("You may be in danger");
    break;
  case "yellow":
    console.log("You should stop");
    break;
  default:
    console.log("You should cross the road");
}
