var variableName = 'Aakash';
console.log(variableName);

let variableName2 = 'Jadhav';
variableName2 = "Surname";
console.log(variableName2);

const variableName3 = 'Akku';
// Reassigning not allowed in const.
// variableName3 = 'Nickname';
console.log(variableName3);

const variableName4 = "Hello";
// variable name should be unique
// const variableName4 = "World";
console.log(variableName4);

// Not allowed to use Javascript keywords 
// const let = "Aakash";

const firstName = "Aakash";
console.log(firstName);
const _middleName = "Hari";
console.log(_middleName);
const $surnameName = "Jadhav";
console.log($surnameName);

//Data Types 

//String
const exampleString = "Hello, World!";
console.log(exampleString);
console.log(typeof exampleString);  
 
const singleQuotes = 'Hello !';
console.log(singleQuotes);

const doubleQuotes = "Hello !!";
console.log(doubleQuotes);

const personName = "Aakash";
const backticks = `Hello ${personName}`;
console.log(backticks);

const useBackticks = `${2+2}`;
console.log(useBackticks);

//Numbers
const wholeNumber = 2;
const decimalNumber = 8.3;
console.log(typeof wholeNumber);
console.log(typeof decimalNumber);

const firstNumber = 3; 
const secondNumber = 2;
const string = "Hello";
const addition = firstNumber+secondNumber;
console.log('Addition is '+addition);
const substraction = firstNumber-secondNumber;
console.log('Substraction is '+ substraction);
const multiplication = firstNumber*secondNumber;
console.log('Multiplication is '+multiplication);
const division = firstNumber/secondNumber;
console.log('Division is '+division);


const result = string/firstNumber;
console.log(result);

//Booleans 
const isCool = true;
if(isCool){
    console.log("Hi man , you're so cool");
}
else {
    console.log("You're not cool");
}
const age = 10;
console.log(age < 20);


//Null
const rollNumber = null;
console.log(typeof rollNumber)
console.log(rollNumber);

//Undefined
let numb;
console.log(numb);

//Objects 
const person = {
    goodName:'Aakash',
    rollNo:12
};
console.log(person); 
console.log(person.goodName);
console.log(person.rollNo);
console.log(typeof person);
console.log(typeof person.goodName) 

const date = new Date();
console.log(date);