var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(num);
console.log(num.length);

// now i wanna push a new element (10) into the array. PS. push() pushes item at last of the array
num.push(10);
num.push("aman");
console.log(num);
console.log(num.length);

// now i want to pop out the last Element. PS. pop() pops out the last element

num.pop();
console.log(num);
console.log(num.length);


// So push and pop adds/removes elements from the end; not from the begining right! Now i want to add/remove element at the begining. So how do we do that
// we use shift() (to remove from the begining) unshift() (to add at the begining)

console.log(num);
num.shift()
console.log(num);



num.unshift(1);
console.log(num);