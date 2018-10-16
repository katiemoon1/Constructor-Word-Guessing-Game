// Requiring the inquirer package
var inquirer = require("inquirer");
// Requiring our word module from word.js
var word = require("./word.js");

var randomWord = function () {
    
}


inquirer   
    .prompt([
        {
            type: "input",
            message: "Guess a letter!",
            name: "guess",

        }
    ])
