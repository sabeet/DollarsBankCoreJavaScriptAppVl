var readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout)

rl.question("Enter a name.", function(input){
    console.log("You inputted " + input)
});