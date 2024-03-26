"use strict";
//store the location in arry. make sure that the arry is not in alphabatic oder.
let places = ['Italy', 'Germany', 'Agra', 'Elifel Tower', 'Times Square'];
//print your arry in its original oder.
console.log('orignal ' + places);
//print your arry in alphabatic oder without modifying the actual list.
console.log('copy ' + [...places].sort());
//print your arry in its original oder.
console.log('orignal ' + places);
//print your arry in reverse alphabatical oder without chsnging the oder of the original list.
console.log('copy ' + [...places].sort().reverse());
//print your arry in its original oder.
console.log('orignal ' + places);
//Reverse the oder oh your list. print the arry to show that its oder has changed.
console.log('orignal ' + places.reverse());
//Reverse the oder oh your list again. print the list to show its back to its original oder.
console.log('orignal ' + places.reverse());
//sort your arry so its stored in alphabatic oder. print the arry to show that its oder has been changed.
console.log('orignal ' + places.sort());
//sort to change your arry so its stored in reverse alphabatical oder. print the list  to show that its oder has changes. 
console.log('orignal ' + places.sort().reverse());
