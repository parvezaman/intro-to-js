// var roastGiven = 0;

// while (roastGiven < 7) {
//     console.log("mama roast den");
//     roastGiven++;
//     console.log(roastGiven);
// }


// while loop example: we want to print 1-10

// var number = 1;
// while (number <= 10) {
//     console.log(number);
//     number++;
// }


// now we want to find out all odd numbers up to 20
// var num = 1;

// while (num <=20) {
//     console.log(num);
//     num += 2; //num = num + 2;
// }

// i want to square the number every time i get as output upto 10,000

var num = 0;
var squared = num*num;

while (num <= 10) {
    console.log(num + " squared = " + squared);
    // while (squared === num) {
    //     num++;
    // }

    if (num === squared) {
        num++;
        console.log(num + " squared = " + num * num);
    }
    // else if(num !== squared ){
    //     console.log(num + " squared = " + num * num);
    // }
    
}