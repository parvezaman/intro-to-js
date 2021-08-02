// var myItems = [ 'bottle', 'mug', 'paper', 'pen', 'mouse', 'keyboard' ];
// var newArrray = [];
// // console.log(myItems.length);

// for (var i = 0; i =myItems.length; i = i+1) {
//     var popedItem = myItems.pop();
//     console.log("i have poped: " + popedItem);
//     newArrray.push(popedItem);
//     console.log("Now i am pushingp: " + newArrray);
    
// }
// console.log("my new array is: " + newArrray);

// var popedItem = myItems.pop();
// console.log(popedItem);
// newArrray.push(popedItem);
// console.log(newArrray);



var myItems = [ 'bottle', 'mug', 'paper', 'pen', 'mouse', 'keyboard' ];
var newArrray = [];
console.log(myItems);

for (var i = 0; i < myItems.length; i++) {
    var popedItem = myItems.pop();
    console.log(popedItem);
    newArrray.push(popedItem);    
}
console.log(newArrray);