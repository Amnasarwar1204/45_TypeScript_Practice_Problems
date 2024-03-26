"use strict";
let guest_list = ['Amna', 'Summara', 'Arooba', 'Noshaba', 'Nimra'];
let message = '\n\nIts our pleasure to invite you in our party.  ';
for (let i = 0; i < guest_list.length; i++) {
    console.log("Dear Mrs. " + guest_list[i] + ',' + message + '\n\nThankyou !\n\n');
}
