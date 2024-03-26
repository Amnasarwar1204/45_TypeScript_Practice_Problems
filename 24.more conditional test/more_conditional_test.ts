// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more
//  comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
// and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array



// Equality and Inequality test 1
console.log("Equality test with strings: ", "Apple" === "Apple");

// Equality and Inequality test 2
console.log("unequality test with strings: ", ("Apple" as string) != "orange");

// test  usung the lower case function
console.log("lower case function test: ", "Apple" .toLowerCase() === "apple");

// numerical test involving Equality  
console.log("Equality test with number: ", 12 === 12);

// numerical test involving  Inequality test
console.log("inequality test with number: ", (12 as number) != 34);

// greater then  test
console.log("Greater then test: ", 3 >1 );

// less then test
console.log("less then test: ", 3 < 9 );

// greater then and equal to test
console.log("Greater then and equal to  test: ", 3 >= 3 );

// less then  and equal to test
console.log("less then and equal to  test: ", 3 <= 6 );
 
// test using "and" opration
console.log("And operation test: ", 3===3 && 1<8 );

// test using "or" opration
console.log("Or operation test: ", 3===3 || 1<8 );

//  test wheather an item is in arry
let fruits : string[] = ['mango', 'apple', 'oranpe'];
console.log('Test "orange" is in arry: ', fruits.includes("orange"));


//  test wheather an item is not in arry

console.log('Test "graps" is not in arry: ', !fruits.includes("graps")); 
















