const readline = require("readline-sync");

console.log("Script started!");

//#region startingTime
var startTime = new Date().getHours();
startTime += ":" + new Date().getMinutes();
startTime += ":" + new Date().getSeconds();
startTime += ":" + new Date().getMilliseconds();
//#endregion

console.log(startTime + "\n");

for (var i = 0; i < process.stdout.columns; i++) {
    process.stdout.write("=");
}
process.stdout.write("\n");

//#region Iteration 1: Names and Input

const driver1 = readline.question("\nWhat's your name? \n>");
console.log(`\n┐\nThe driver\'s name is ${driver1}\n┘\n`);

const driver2 = readline.question("What's your name? \n>");
console.log(`\n┐\nThe navigator\'s name is ${driver2}\n┘\n`);

//#endregion
//#region Iteration 2: Conditionals

if (driver1.length > driver2.length) {
    console.log(`${driver1} has the longest name with ${driver1.length} characters!\n`);
}
else if (driver1.length < driver2.length){
    console.log(`${driver2} has the longest name with ${driver2.length} characters!\n`);
}
else {
    console.log(`Yalls names are the same length! ${driver1.length} characters!\n`)
}

//#endregion
// Iteration 3: Loops

for (var i = 0; i < driver1.length; i++) {
    process.stdout.write(driver1[i].toUpperCase() + " ");
}
process.stdout.write(`\n\n`);//how silly

for (var j = driver2.length - 1; j >= 0; j--) {
    process.stdout.write(driver2[j]);
}
process.stdout.write(`\n\n`);//how silly

if (driver1 == driver2) {
    console.log("You guys have the same name?!?!");
}
else if (driver1[0] < driver2[0]) {
    console.log(`${driver1}s name comes first since it starts with ${driver1[0]}`);
}
else if (driver1[0] > driver2[0]) {
    console.log(`${driver2}s name comes first since it starts with ${driver2[0]}`);
}
else if (driver1[0] == driver2[0]) {
    console.log("your names start with the same letter");
}
else {
    console.log("error");
}