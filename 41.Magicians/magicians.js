"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
//  which prints the name of each magician in the array
let magician = ['Harry Potter', 'Hermione Granger', 'Ron Wasley', 'Albus Dumbledore'];
function show_magician(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
show_magician(magician);
