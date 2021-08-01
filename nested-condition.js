// var biscuitPrice = 5;
// var cokePrice = 15;
// var teaPrice = 3;
// var myPocketBalance = 10;
// var sumAll = biscuitPrice + cokePrice + teaPrice;
// var sumBiscuitCoke = biscuitPrice + cokePrice;
// var sumTeaBiscuit = teaPrice + biscuitPrice;

// if ((myPocketBalance > teaPrice) && (myPocketBalance < sumTeaBiscuit)) {
//     console.log("i will take only tea");
// } else if ((myPocketBalance > sumTeaBiscuit) && (myPocketBalance < sumAll)){
//     console.log("I will take both tea and biscuit");
    
// }else if (myPocketBalance > sumAll){
//     console.log("I will take all of them");
// } else{
//     console.log("I will take nothing");
// }



var danishPrice = 50;
var butterBreadPrice = 25;
var toastBiscuitPrice = 10;

var myBudget = 100;
var packedWell = false

if (danishPrice < myBudget){
    if (packedWell == true){
        console.log("Danish dau danish khamu!!!");  
    }
    else{
        console.log("Danish diyo na danish khamu na!!!");
    }
} 
else if (butterBreadPrice < myBudget) {
    console.log('Butter bon khamu');
} 
else if(toastBiscuitPrice < myBudget){
    console.log("toast biscuit khamu!");
} 
else{
    console.log("kisui khamu na -_-");
}


