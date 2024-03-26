"use strict";
let guest_list = ['Amna', 'Summara', 'Arooba', 'Noshaba', 'Nimra'];
let message = '\n\nIts our pleasure to invite you in our party.  ';
for (let i = 0; i < guest_list.length; i++) {
    console.log("Dear Mrs. " + guest_list[i] + ',' + message + '\n\nThankyou!\n\n');
}
let absent_guest = 'Amna';
let new_guest = 'Huma';
guest_list[0] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log("Dear Mrs. " + guest_list[i] + ',' + message + '\n\nThankyou!\n\n');
}
console.log(`Mrs. ${absent_guest} is not coming in party.`);
console.log('\n\nGood newa! we find a big table so we are inviting 3 more duest.\n\n');
guest_list.unshift("aftab");
guest_list.splice(2, 0, 'farooq');
guest_list.push("Sana");
for (let i = 0; i < guest_list.length; i++) {
    console.log("Dear Mrs. " + guest_list[i] + ',' + message + '\n\nThankyou!\n\n');
}
