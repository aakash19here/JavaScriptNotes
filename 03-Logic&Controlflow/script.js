//===========if statement==========//

/*
if(condition){
    block of code
}
*/
const age = 18;
if(age>18){
    console.log("You may enter");
}else if(age === 18){
    console.log("You just entered 18, welcome!");
}else{
    console.log("You cannot enter");
}


//===========Truthy and Flasy value==========/
if(1){
    console.log("In here");
}else{
	console.log("No,in here");
}

const dogs = 5;
if(dogs){   //if(5) 
    console.log(`You have ${dogs} dogs`);
} else {
    console.log('You have no dogs');
}

//=============Logical Operators P-2=========/
const personAge = 19;
const isCool = true;
if(personAge >18 && isCool){
    console.log("Welcome Homie");
} else{
    console.log("You are not allowed");
}
//Now lets learn about logical operators some more using truthy and falsy values
//AND
console.log('truty' && 1 && 'test' && 99);
console.log('truty' && 0 && 'test' && 99);

//OR
console.log('truthy' || 1 || 'test' || 99);
console.log(''||null||0||false||undefined);

//NOT 
console.log(!true);
console.log(!false);
console.log(!'truthy')

const check = true;
if(!!check){
    console.log("Value is truty");
}else{
    console.log("Value is falsy");
}



//==============Switch Statement================// 
const superHero = 'Joker';
switch(superHero){
    case 'Iron Man':
        console.log('Iam Iron Man........');
        break;
    case 'Black Panther':
        console.log('Wakanda Forever');
        break;
    case 'Captian America':
        console.log('I can do this all day');
        break;
    case 'Thor':
        console.log('Thats my hammer');
        break;
    case 'Black Widow':
        console.log('One shot,one kill !!');
        break;
    default:
        console.log('This character is not from MCU')
}
//===============Ternery Operator==========//
//condition ? block of code if true : block of code if false;
(2 >= 2)?console.log('True'):console.log('False'); 

const ageOfDriver = 18;
//with if
if(ageOfDriver >= 18){
    console.log('You can drive');
} else{
    console.log('You cannot drive');
}
//with ternery operator
(ageOfDriver >= 18)?console.log('You can Drive my Man'):console.log('Sorry you cannot drive')

// =============Looping==============//
//WHILE LOOP
let i = 0;
while(i<10){
    console.log(i);
    i++;
}

//For Loop
for(let i = 10;i < 21;i++){
	console.log(i);
}