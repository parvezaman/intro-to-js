// function declaration

function addNumber(num1, num2,) {
    var num1 = parseFloat(prompt("input first number: "));
    var num2 = parseFloat(prompt("input second number: "));
    console.log("THE SUM IS: " , num1+num2);
}

// call the function
// addNumber();

// singara kena function :P

function bringSingara (taka,singaraWanted, singaraPrice,boughtSingara ){
    var taka = parseFloat(prompt("vaiya taka den"));
    console.log('singara kinte dise',taka , "taka");
    // document.write('singara kinte dise',taka , "taka");
    // singarar dam 5/piece
    var singaraWanted = parseFloat(prompt("vaiya koita singara anbo?"));

    console.log("ok!");
    var singaraPrice = parseFloat(prompt("mama! singara koto kore?"));
    // document.write("mama ", singaraWanted, "ta singara den r baki ", taka - singaraWanted*5, " taka ferot den!!");
    var takaFerot = taka - singaraWanted*singaraPrice;
    console.log("mama ", singaraWanted, "ta singara den r baki ", takaFerot, " taka ferot den!!");
    console.log("vaiya ei naw tomar baki ", takaFerot, " taka");

    // return takaFerot;
    // return singaraPrice;
    var boughtSingara;
    if (takaFerot >= 0) {
        boughtSingara = true;
    }else{
        boughtSingara = false;
    }
    return boughtSingara;
}

// var moneyBack = bringSingara();
// console.log("coto vai ferot dice ", moneyBack, " taka!");
// var howMuch = bringSingara();
// console.log("vaiya singara ", howMuch, " taka kore niche!");
var singaraPaico = bringSingara();
if (singaraPaico == true) {
    console.log("vaiya singara paichi!");
}else{
    console.log("vaiya singara kinte pari nai, takai short porche!");
}
// console.log("vaiya ei naw tomar baki ", takaFerot, " taka");



// so singara code theke ami ki ki sikhlam?
//     1. how to use a function
//     2. function er votore ami iccha moto variable declare korte pari
//     3. function er votore use kora variable baire kaj korbe na
//     3. ami amar drkr mto return nite parbo inshallah 
//     4. return ta onno 1 ta variable a store kore onno kaje lagano jabe inshallah.

