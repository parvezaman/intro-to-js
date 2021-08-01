var nameOfSomeSahabaRa = ["Abu Bakar", "Umar", "Usman", "Ali", "Abdur Rahman", "Hasan", "Hussaian", "Muabiya", "Salman Farsi", "Hamza", "Ibn Abbas"];
console.log(nameOfSomeSahabaRa);
console.log(nameOfSomeSahabaRa.length);

// to find index of a particular Element of the arrary
var aliIndex = nameOfSomeSahabaRa.indexOf('Ali');
console.log(aliIndex);

console.log(nameOfSomeSahabaRa.indexOf("Ali"));
console.log(nameOfSomeSahabaRa.indexOf("Kaab"));

// lets say, i wanna see the man in 5th position
var fifthPerson = nameOfSomeSahabaRa[4];
console.log(fifthPerson);

console.log(nameOfSomeSahabaRa[4]);
console.log(nameOfSomeSahabaRa[13]);

// now what if i want to change an element by index, suppouse i want to change Abdur Rahman into Abdur Rahman AKA Abu Huraira;
console.log(nameOfSomeSahabaRa.indexOf("Abdur Rahman"));
nameOfSomeSahabaRa[4] = "Abdur Rahman AKA Abu Huraira";
console.log(nameOfSomeSahabaRa[4]);
console.log(nameOfSomeSahabaRa.indexOf("Abdur Rahman AKA Abu Huraira"));

console.log(nameOfSomeSahabaRa);