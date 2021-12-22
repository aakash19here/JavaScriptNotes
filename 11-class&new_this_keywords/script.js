const person = {};
const otherPerson = new Object();

person.firstName = 'Aakash';
otherPerson.firstName = 'Aku'

console.log(person);
console.log(otherPerson);

//Creating array with new keyword
const arr = [1,2,3];
const newArr = new Array(1,2,3);
console.log(arr,newArr);

const myDate = new Date('August 10,2025');
console.log(myDate);

console.log(Array);
console.log(Object); 
console.log(Number);
console.log(Date);

const myNumber = new Number(100.245);
console.log(myNumber.toFixed(0)); 
//===============this keyword====================//
function Sentence(words) {
    this.words = words;
    console.log(this);
}
const firstString = new Sentence('Hello,this is a sentence');

console.log(this);

function carFactory(color,brand,wheels){
    this.color = color;
    this.brand = brand;
    this.wheels = wheels;
    console.log(this)
}
const blueCar = new carFactory('Blue','BMW',4);
const redCar = new carFactory('Red','Ferrari',4)

//Classes 
class Person {
	constructor(name,age,isWorking){
		this.name = name;
		this.age = age;
		this.isWorking = isWorking;
	}
}

const user = new Person('Milessa',24,true);
console.log(user);

//With functions
//Way 1 
const createPerson = (name,age,isWorking) => {
    const userSchema = {
        name,
        age,
        isWorking
    }
    return userSchema;
}
// Way 2
// const createPerson = (name,age,isWorking) => ({name,age,isWorking});
const User = createPerson('Aakash',18,true);
const User2 = createPerson('Unknown',1,false);
console.log(User);
console.log(User2);