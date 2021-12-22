console.log('Hello,World!');
const a = 5;
const b = 10;
let result = 0; // changable result 

//=================Arithmatic Operators==================//
//Addition 
result = a + b;
console.log(result);

//Multiplication 
result = a * b;
console.log(result);

//Division 
result = a / b;
console.log(result);

//Substraction 
result = a - b;
console.log(result);

//Exponent
result = a ** b;
console.log(result);
result = b ** a;
console.log(result) 

//Modulo Operator 
result = a % b;
console.log(result);

//Increment and Decrememt Operators
result = 0; 
result++;
console.log(result);
result = 0;
result--;
console.log(result);
 
//======================Comparison Operators=====================// 
const x = 5;
const y = 10;

//Greater than 
console.log(x>y);

//Greater than or equal to 
console.log(x>=y);

//Less than 
console.log(x<y);

//Less than or equal to 
console.log(x<=y); 

//Equal to 
console.log(x==y);

//Not Equal 
console.log(a!=b);

//Strict Equality 
console.log(a===b);

//Strict Inequality 
console.log(a!==b);

console.log(5 == 5);
console.log('Hello' == 'Hello');
//Also 
console.log(5 === 5);
console.log('Hello' === 'Hello');

//But in case of strict equality we get the correct output as false 
console.log(5==='5'); 

//Now if we check with loose equality we get the below statement as true 
console.log(5 == '5');


//========================Logical Operators===========================//
//AND --> &&
console.log(true && false);
console.log(true && true);
console.log(false && false);
console.log(true && false && true);
//OR --> ||
console.log(true || true); //true
console.log(true || false); //true 
console.log(false || false); //false 
console.log(true || false || false); //true
//NOT
console.log(!true); //false
console.log(!false); //true  


//=========================Assignment Operators======================//
let number = 5;
number += 2; // number = number+5
console.log(number);

number = 5
number -= 2; // number = number-2
console.log(number) 

number = 5;
number *= 2; //number = number*2
console.log(number);

number = 5;
number /= 5; //number = number/5
console.log(number);

let string = 'Hello';
string += ' ,I am Aakash';
console.log(string);