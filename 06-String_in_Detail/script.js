//We can create strings in three ways 
const single = 'I am in single quotes';
const double = "I am in double quotes";   
const backticks = `I am in backticks`;

//Use of backticks 
const twoTimeTwo= `Two times two is ${2*2}`;
console.log(single);
console.log(double);
console.log(backticks);
console.log(twoTimeTwo);  

const sum = (a,b) => a+b;
console.log(`Sum is ${sum(4,4)}`);

console.log(`1
2
3
4
`);
console.log("I'm Aakash but people call me \"Ak\"");

//String Length and Basic Properties;
const str = "HELLO";
console.log(str.length);  
const firstLetter = str[0];
console.log(firstLetter);
const lastLetter = str[str.length-1];
console.log(lastLetter);

//Change string case 
const mixedString = "Hello,how are you!"
const lowerCaseString = mixedString.toLowerCase();
console.log(lowerCaseString);
const upperCaseString = mixedString.toUpperCase();
console.log(upperCaseString);

//Searching for a substringGuests
const hoobies = 'I Love HTML, CSS and JavaScript.';
const firstIndex = hoobies.indexOf('JavaScript');
console.log(firstIndex);

const lastIndex = hoobies.lastIndexOf('JavaScript');
console.log(lastIndex);

const includesJavaScript = hoobies.includes('JavaScript');
console.log(includesJavaScript);

console.log(hoobies.startsWith('I'));
console.log(hoobies.endsWith('.')); 

//Getting a substringGuests
const exampleString = 'Hotdog';
console.log(exampleString.slice(0,2));
console.log(exampleString.slice(0));
const indexFunc = () => {
    for(let i=0;i<=exampleString.length-1;i++){
        console.log(`${exampleString[i]} is at ${i}`);
    }
}
indexFunc();

//Spilting a string
{
    //Block Scope for using variable names again
    const exampleString = 'Dog';
    console.log(exampleString.split(''));
}
const sentence = 'A quick brown fox jumps over the lazy dog';
console.log(sentence.split(' '));  

//Reverse, Repeat and Trim a String
// const reverse = 'test';
// console.log(reverse.reverse());
const stringToReverse = "Aakash";
const reversedString = stringToReverse.split('').reverse().join("");
console.log(reversedString);

const dogSays = 'woof ';
console.log(dogSays.repeat(5));

const exString = '   Hello,World   ';
console.log(exString.trim());


//Exercise
const guestList = 'Our guests are: emma, jacob, isabella, ethan';
const countOfGuest = guestList.length;
console.log(countOfGuest);

const upperCaseGuestList = guestList.toUpperCase();
console.log(upperCaseGuestList);

const isEthanOnTheList = upperCaseGuestList.includes('ETHAN');
console.log(isEthanOnTheList);

const firstName = upperCaseGuestList.indexOf('EMMA');
const substringGuests = upperCaseGuestList.slice(firstName,);
console.log(substringGuests);

const guestLog = substringGuests.split(',')
console.log(guestLog); 