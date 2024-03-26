// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and 
// you have space for only two guests.

// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only
//  two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a 
// name from your list, print a message to that
//  person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually
//  have an empty list at the end of your program.


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
//adding 3 guest in arry
guest_list.unshift("aftab");
guest_list.splice(2 , 0, 'farooq');

guest_list.push("Sana");
//here i print 6 guest in arry
for(let i=0;i<guest_list.length;i++){
    

    console.log("Dear Mrs. " + guest_list[i] + ',' + message + '\n\nThankyou!\n\n');  

}
console.log('\nSorry we can not arrange big table,only two people will be invited.\n');
//here i remove guest
while(guest_list.length > 2){
var erase_guest = guest_list.pop();
}


console.log(`sorry Mr or Mrs. ${erase_guest}, you are not invited for dinner.`);
//our remaning 2 inveted guest
for(let i=0;i<guest_list.length;i++){
    

    console.log("Dear Mrs. " + guest_list[i] + ',' + '\n\nyou are still invited .\n\nThankyou!\n\n');  

}

//i remove all guest from arry
 guest_list.splice(0, 2);
 console.log(guest_list);