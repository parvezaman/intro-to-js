// var i = 0;

// while (i < 15) {
//     console.log(i);
//     if (i == 5){
//         break;
//     }
//     i++;    
// }


var numbers = [25, 56, 24, 56, 48, 54, 865, 4859, 565, 48];

// for (var i= 0; i < numbers.length; i++){
//     var number = numbers[i];

//     if (number > 100) {
//         break;
//     }
//     console.log(number);

// }
for (var i= 0; i < numbers.length; i++){
    var number = numbers[i];

    if (number > 100) {
        continue;
    }
    console.log(number);

}