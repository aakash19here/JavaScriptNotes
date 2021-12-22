{
    let x = 1;
    let y = x;
    x = 2;
    console.log(x);
    console.log(y);

    //One more example 
    let firstPerson = 'Mark';
    let secondPerson = firstPerson;
    firstPerson = 'Austin';
    console.log(firstPerson);
    console.log(secondPerson);
}
{
    //Copying Complex values 
    //With Arrays
    const animals = ['dogs','cats'];
    const otherAnimals = animals;
    animals.push('lion');
    console.log(animals);
    console.log(otherAnimals);  
}
{
    //With Objects
    const person = {firstName:'Jon',lastName:'Snow'};
    const otherPerson = person;
    person.firstName = 'Johnny';
    console.log(person);
    console.log(otherPerson); 
}
{
    const person = {name:'Jon'};
    const otherPerson = {name:'Jon'};
    console.log(person === otherPerson); //false
}
{
    const person = {name:'Jon'};
    const otherPerson = person;
    console.log(person === otherPerson); //true
}
//=============Cloning Array=========================//
{
    //1] Spread Opertor 
    const numbers = [1,2,3,4,5];
    console.log(...numbers);
    const newNumbers = [...numbers];
    console.log(newNumbers);
    console.log(numbers === newNumbers);  
}
{
    //We try changing the number array in this example 
    const numbers = [1,2,3,4,5];
    const copiedNumbers = numbers;
    const newNumbers = [...numbers];
    numbers.push(6,7,8);
    console.log(numbers);
    console.log(copiedNumbers); 
    console.log(newNumbers);
}
{
    //2] Array Slice method
    const numbers = [1,4,9,16,25];
    const newNumbers = numbers.slice();
    numbers.push(36);
    console.log(numbers);
    console.log(newNumbers);
}
//=============Cloning Objects=========================//
{
    //Spread Operator 
    const person = {name:'John',age:20};
    const otherPerson = {...person};
    person.lastName = 'Wick';
    console.log(person);
    console.log(otherPerson);
}
{
    //Object.assign()
    const person = {name:'John',age:20};
    const otherPerson = Object.assign({},person);
    person.age = 31;
    console.log(person);
    console.log(otherPerson);
}
//==============Deep Cloning=================//
{
    //Changing name
    const person = {
        firstName: 'Emma',
        car:{
            brand:'BMW',
            color:'Blue',
            model:'M3 GTR'
        }
    }
    const otherPerson = {...person};
    otherPerson.firstName = 'Mia';
    console.log(person);
    console.log(otherPerson);
}
{
    //Changing car color
    const person = {
        firstName: 'Emma',
        car:{
            brand:'BMW',
            color:'Blue',
            model:'M3 GTR'
        }
    }
    const otherPerson = {...person,car:{...person.car}};
    otherPerson.firstName = 'Mia';
	otherPerson.car.color = 'red';
    console.log(person.car);
    console.log(otherPerson.car);
}
{
 //JSON.stringified();
    const person = {
        firstName:'Emma',
        car:{
            brand:'BMW',
            color:'Blue',
            model:'M3 GTR'
        }
    }
    const stringifiedPerson = JSON.stringify(person);
    person.car.color = 'Green';
    const newPerson = JSON.parse(stringifiedPerson);
    console.log(person);
    console.log(newPerson);
}

function sqaure(number){
	return number*number;
}
console.log(sqaure(5));