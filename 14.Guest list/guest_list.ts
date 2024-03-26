// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
// Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a
//  message to each person,inviting them to dinner.




let guest_list : string[] = ['Amna','Summara','Arooba','Noshaba','Nimra'];

let message : string = '\n\nIts our pleasure to invite you in our party.  ';
for(let i=0;i<guest_list.length;i++){

    console.log("Dear Mrs. " + guest_list[i] + ',' + message + '\n\nThankyou !\n\n');  

}