//===============Functions=====================//

//A BLOCK OF CODE ==> PERFORMS A TASK

//A FUNCTION DECLARARION (defining a function)

//Function 1
function square(number) {
  return number * number;
}
const result = square(25);
console.log(result);

//Function 2 - Arrow Function 
const sq = (numb) => {
  return numb * numb;
}; 
const res = sq(3);
console.log(res); 

//Function 3 Normal Function 
function sayHi(name){
  console.log(`Hi ${name},I hope you are fine?`); 
}
sayHi('Aakash');

//Function 4 Normal Function 
function add(a,b){
  return a + b;
}
const sum = add(3,3);
console.log(sum)

//-------------Function 5---------------//
function test(){
  console.log(1);
	return true;
  console.log(2);
	return false;
  console.log(3);
}
const bool = test();
console.log(bool);

//--------------Arrow Functions----------------//
//Cube 
for(let i=1;i<=10;i++){
  const cube = (i) => {
    console.log(`Cube of ${i} is ${i*i*i}`);
  }
  cube(i);
}
//Table 
//Use for loop when something same is changing repeatedly.
for(let j=1;j<=10;j++){
  const table = (num) => {
      console.log(num*j);
  }
  table(4);
}  



const sayHello =(firstName,age)=>{
  if(age>=18){
    console.log(`Hello ${firstName},you are eligible for driving license`);
  }else{
    console.log(`Hello ${firstName},you are not eligible for the licsense, you are only ${18 - age}yr away from it`);
  }
}
sayHello('Aakash',18);

