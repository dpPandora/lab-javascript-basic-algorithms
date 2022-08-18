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

var option = readline.question("\nSkip Iterations 1-3?\n>");

if (option === "no") {
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
}

console.log();

var paragrap = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel diam eget enim mollis mollis. Duis porttitor ipsum vel egestas lobortis. Nunc tincidunt enim congue, imperdiet felis ultricies, egestas purus. Nunc at lacus ac dolor aliquam viverra. Fusce congue tortor velit, eget suscipit mauris efficitur id. Pellentesque dictum nisi ligula, in feugiat sapien pretium a. Nullam tincidunt felis sit amet lectus varius aliquam. Cras risus justo, finibus non fringilla vel, vehicula vulputate mauris. Vestibulum molestie, eros ut tincidunt porttitor, nisi tortor scelerisque justo, id dapibus nunc nulla vitae nisi. In libero lorem, molestie et lacus ac, pulvinar suscipit diam. Proin eu eros ut dolor rhoncus aliquet nec vitae est. Vestibulum vel mauris pharetra, scelerisque mauris sed, interdum dui. Sed ultricies venenatis nunc id fermentum. Donec porttitor nibh ac lacus eleifend, nec hendrerit ex fringilla. Nullam blandit arcu est, ut luctus quam volutpat vitae. Nunc ut luctus risus, at eleifend lectus. Pellentesque ac ex venenatis, ullamcorper lectus a, consequat metus. Suspendisse vitae turpis in nisl faucibus pretium vitae nec augue. Mauris sit amet mauris fringilla, feugiat erat quis, lacinia neque. Nullam imperdiet mi et blandit mollis. Donec eu ante sem. Suspendisse eleifend suscipit leo quis vestibulum. Phasellus pharetra libero eget lectus ultrices, eget ultricies est convallis. Sed et felis id leo lacinia finibus. Donec et sem magna. Cras vitae bibendum neque. Morbi molestie dapibus nunc, non pellentesque elit porta eu. Proin quis purus fermentum, euismod eros mattis, euismod sem. Ut congue vel tortor sed sollicitudin. Nam sit amet tempus nisi. Etiam venenatis tincidunt ligula ut ultrices. Sed ut lobortis arcu. Sed sollicitudin diam lacus, et aliquam dolor placerat et. Praesent elementum vulputate turpis. Phasellus interdum, neque ut lacinia euismod, quam elit scelerisque quam, at fringilla velit sapien eget nulla."

function printLong (text) {
    var consoleWid = process.stdout.columns;
    var temb = 0;
    for (var i = 0; i < text.length; i++) {
        process.stdout.write(text[i]);
        temb++;

        if (temb === consoleWid) {
            temb = 0;
            process.stdout.write('\n');
        }
    }
    process.stdout.write('\n');
}

printLong(paragrap);

var numOfWords = 0;
var occuranceEt = 0;

var nextFour;

for (var i = 0; i < paragrap.length; i++) {
    if (paragrap[i] === "." || paragrap[i] === " " || paragrap[i] === ". ") {
        numOfWords++;
        //console.log("degub");
    }

    var nextFour = "";

    for (var j = i; j < i + 4; j++) {
        nextFour += paragrap[j];
    }

    //console.log(`\n${nextFour}`);

    if (nextFour === " et " || nextFour === " et." || nextFour === " et,") {
        occuranceEt++;
        //console.log(`\n${nextFour}`);
    }
}

console.log(`\nNumber of words: ${numOfWords}\n(the website that generated the text says theres 288 words so i think its not counting things like conjunctions,,, i dont know latin believe it or not so i dunno what words to exclude :<)`);

console.log(`\nTimes "et" shows up: ${occuranceEt}`);

var phrase = readline.question("\nEnter a prase:\n>");

if (phrase.length === 0) {
    console.log("\nPlease enter a valid phrase ~<~");
} 
else {
    var phraseCleaned = "";
    for (var place = 0; place < phrase.length; place++) {
        if ((/[a-zA-Z]/i).test(phrase[place])) {
            phraseCleaned += phrase[place].toLowerCase();
        }
    }

    //phrase[place] != " " && phrase[place] != "," && phrase[place] != "."

    console.log(`\n${phraseCleaned}`);

    var cleanedPhraseRev = "";

    for (var place = phraseCleaned.length - 1; place >= 0; place--) {
        cleanedPhraseRev += phraseCleaned[place];
    }

    console.log(`\n${cleanedPhraseRev}`);

    if (phraseCleaned === cleanedPhraseRev) {
        console.log(`\n${phrase} is a palindrome!`);
    }
    else {
        console.log(`\n"${phrase}" is not a palindrome :<`);
    }
}