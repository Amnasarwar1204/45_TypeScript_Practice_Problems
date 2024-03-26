"use strict";
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides,
//  and it should print a summary of the sandwich that is being ordered. Call the function three times, 
//  using a different number of arguments each time.
function make_sandwich(item) {
    console.log('\nMaking your sandwich with:');
    item.forEach(element => console.log("- " + element));
    console.log('Enjoy your sandwich.\n');
}
make_sandwich(['Chicken', 'Cheese', 'Mayo']);
make_sandwich(['Ham', 'Lettuce']);
make_sandwich(['Avocado', 'Peanut butter', 'Olives']);
