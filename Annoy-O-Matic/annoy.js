// var answer = prompt("Are we there Yet?");

// while(answer !== "yes" && answer !== "yeah") {
// 	var answer = prompt("Are we there Yet?");
// }
// alert("YAY, WE MADE IT!!!");


//version

var answer = prompt("Are we there Yet?");

while(answer.indexOf("yes") === -1) {
	var answer = prompt("Are we there Yet?");
}
alert("YAY, WE MADE IT!!!");