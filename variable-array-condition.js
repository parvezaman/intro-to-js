// how to define a variable

var glassColor = "white";
var waterQuantity = 1;
var isFull = false;

// array

var items = ['bottle', 'mug', 'paper', 'pen'];
items.indexOf('mug'); //1
items.indexOf('chocklet'); //-1
items.push('mouse', 'keyboard');
console.log(items); // items = [ 'bottle', 'mug', 'paper', 'pen', 'mouse', 'keyboard' ]
items.pop();
console.log(items); // items = [ 'bottle', 'mug', 'paper', 'pen', 'mouse' ]


// conditions
if(items.length >= 4){
    console.log("you have too many stuff on your desk. messyyyyy ~_~");
}
else{
    console.log("wow!!! you have a clean desk");
}
// you have too many stuff on your desk. messyyyyy ~_~