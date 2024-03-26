// More Guests: You just found a bigger dinner table, so now more space is available. 
// Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that
//  you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
//  • Print a new set of invitation messages, one for each person in your list.



let guest_list : string[] = ['Amna','Summara','Arooba','Noshaba','Nimra'];

let message : string = '\n\nIts our pleasure to invite you in our party.  ';
for(let i=0;i<guest_list.length;i++){

    console.log("Dear Mrs. " + guest_list[i] + ',' + message + '\n\nThankyou!\n\n');  

}

let absent_guest : string = 'Amna' ;

let new_guest : string = 'Huma' ;
guest_list[0] = new_guest ;

for(let i=0;i<guest_list.length;i++){
    

    console.log("Dear Mrs. " + guest_list[i] + ',' + message + '\n\nThankyou!\n\n');  

}
console.log(`Mrs. ${absent_guest} is not coming in party.`);

console.log('\n\nGood newa! we find a big table so we are inviting 3 more duest.\n\n');

guest_list.unshift("aftab");
guest_list.splice(2 , 0, 'farooq');

guest_list.push("Sana");




for(let i=0;i<guest_list.length;i++){
    

    console.log("Dear Mrs. " + guest_list[i] + ',' + message + '\n\nThankyou!\n\n');  

}