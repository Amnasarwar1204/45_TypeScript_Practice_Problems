"use strict";
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block
//  create a veriable call alien_color
let alien_color = 'green';
if (alien_color === 'green') {
    console.log("player get 5 points! ");
}
else {
    console.log("player get 10 points! ");
}
//write one version of this program that passes the if test and another that fails/ 
alien_color = 'yellow';
if (alien_color === 'green') {
    console.log("player get 5 points! ");
}
else {
    console.log("player get 10 points! ");
}
