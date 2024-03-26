// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the 
// number of people you are inviting to dinner.



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

//sorry message to guest for not inviting.
console.log('\nSorry we can not arrange big table,only two people will be invited.\n');

//here i remove guest
while(guest_list.length > 2){
let erase_guest = guest_list.pop();

console.log(`sorry Mr or Mrs. ${erase_guest}, you are not invited for dinner.`);
}

//our remaning 2 inveted guest
for(let i=0;i<guest_list.length;i++){
    

    console.log("Dear Mrs. " + guest_list[i] + ',' + '\n\nyou are still invited .\n\nThankyou!\n\n');  

}

//i remove all guest from arry
 guest_list.splice(0, 2);
 console.log(guest_list);

 //Assigment 19
 //print a message indicating the number of people you are invited to dinner.

 console.log(`Total number of guest are ${guest_list.length}`);