var computer = {
    price: 10000,
    storage: "156 gb",
    processor: "intel i5",
    color: "silver"
}
// lets change a value
computer.price = 9000;

console.log(computer);

// keep a key/property in a variable 
console.log(computer.processor);
var comProcessor = computer.processor;
console.log(comProcessor);


// multiple ways to change/set a key value 

//way 1
computer.price = 13000; 

//way 2
computer["processor"] = "AMD-800"; 

//way 3
var newColor = 'color';     
computer[newColor] = 'cyan';   


// console to see the change
console.log(computer);