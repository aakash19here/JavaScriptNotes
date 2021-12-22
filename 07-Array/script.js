const months = ['January','February','March','April'];
months[3] = 'Not march';
console.log(months);
for(let i=0;i<months.length;i++){
    console.log(months[i])
}
const values = [
    'Apple',
    {name:'John'},
    3,
    null,
    true,
    () => {}
]
console.log(values);
//=============Array Push================// 
{
    const names = ["Jon","Bob","David","Mark"]; 
    names.push('Dean');
    console.log(names);
}
//============Array Pop==================//
{
    const names = ["Jon","Bob","David","Mark","Dean"]; 
    names.pop();
    console.log(names);
}
{
    //Return value of array pop 
    const names = ["Jon","Bob","David","Mark","Dean"];
    console.log(names.pop());
}
//=============Array shift=============//
{
    const names = ["Jon","Bob","David","Mark","Dean"];
    names.shift();
    console.log(names); 
}
//=============Array Unshift=========//
{
    const names = ["Bob","David","Mark","Dean"];
    names.unshift("Jon");
    console.log(names);
}
{
    const names = ["Bob","David","Mark","Dean"];
    const addedName = names.unshift("Jon");   
    console.log(addedName);
}
//===============Array Splice=========//
{
    const names = ["Jon","Bob","David","Mark","Dean"];
    names.splice(2,0,'Jenny','Brock');
    // names.splice(2,2); Deletes David and Mark 
    console.log(names);
}
{
    //Delete a element in array
    const names = ["Jon","Bob","David","Mark","Dean"];
    const deletedNames = names.splice(2,1,'Jenny','Brock');
    console.log(deletedNames);
}

//==============Array Slice==========//
{
    const names = ["Jon","Bob","David","Mark","Dean"];
    const noOneLikesJon = names.slice(1);
    console.log(noOneLikesJon); 
}   


//==========Array ForEach============//
{
    //Using For Loop 
    const names = ['Jon','Jenny','Johnny'];
    for(let i=0;i<names.length;i++){
        console.log(i,names[i]);
    }
}
{
    //Using ForEach
    const names = ['Jon','Jenny','Johnny'];
    names.forEach((name,i) =>{
        console.log(name,i); //names[i]
    }); 
}
{
    const names = ['Bean','Mark','Dean'];
    const logTheName = (name,i) => console.log(name,i);
    names.forEach(logTheName);
}
{
    const names = ['Richard','Erlich','Dinesh','Gilfoyle'];
    const returnValue = names.forEach((name,i) => console.log(name,i));
    console.log(returnValue);
}
{
    //Example of when to use it
    let sum = 0;
    const numbers = [65,12,4,44];
    numbers.forEach((number) => {
	    sum = sum + number;
    })
    console.log(sum);
}

//============Array Map=================//
{
    //Using Array Map
    const inventory = [
        {price:5,name:'eggs'},
        {price:4,name:'ham'},
        {price:3,name:'mayo'},
        {price:5,name:'bread'},
    ];
    const prices = inventory.map((item) => item.price);
    const items = inventory.map((item) => item.name);
    console.log(prices);
    console.log(items);
}
{
    //Using Array ForEach   
    const inventory = [
        {price:5,name:'eggs'},
        {price:4,name:'ham'},
        {price:3,name:'mayo'},
        {price:5,name:'bread'},
        {price:6,name:'Veges'}
    ];
    inventory.forEach((item) => console.log(item.name));
}

//===========Array Some and Array Every============//
{
    //Array Some
    const array = [1,2,3,4,5]; 
    const isAnyGreaterThanThree = (number) => number > 3;
    console.log(array.some(isAnyGreaterThanThree));
        /*
    You can also do this 
    console.log(array.some((number) => number>3))
    */
}
{
    //Array Every 
    // It checks values using loose equality,
    const array = [1,12,13,14,15];
    const isAnyGreaterThanThree = (number) => number > 3;
    console.log(array.every(isAnyGreaterThanThree));
    /*
    You can also do this 
    console.log(array.every((number) => number>3))
    */
}
//=================Array Filter===============//
{
    const numbers = [-10,0,-2,15,-36,25];
    const positiveNumber = (number) => number >=0;  
    console.log(numbers.filter(positiveNumber));
}
{
    //Another Way 
    const numbers = [-10,0,-2,15,-36,25];
    const positiveNumber = numbers.filter((number) => {
        return number >= 0;
    })
    console.log(positiveNumber);
}
//How would we do using for loop 
{
    const numbers = [-10,0,-2,15,-36,25];
    const negativeNumber = [];
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] < 0){
            negativeNumber.push(numbers[i]);
        }
    }
    console.log(negativeNumber);
}

{
    //Lets see real-life example of filter method 
    const employeesData =[
        {name: 'Sebastian',overtime: 5},
        {name: 'Cardi',overtime: 10},
        {name: 'George',overtime: 12},
    ];
    //The company wants to reward the employees with 7 or more hours of overtime
    //Method 1: -Shortcut
    const employeesToReward = employeesData.filter((employee) => employee.overtime>=7);
    //Method 2: Lengthy method 
    // const employeesToReward = employeesData.filter((employee) =>{
    //     return employee.overtime >= 7;
    // })

    const employeeNames = employeesToReward.map((employee) => employee.name)
    
    //Method 1: Prints only array with no message
    // console.log(employeeNames); 
    //Method 2: Prints with a congratulatory message  
    employeeNames.forEach((name) => console.log(`Congrats ${name}`))
}
//=============Array Find====================//
{
    const numbers = [1,2,3,4,5,6,7,8,9,10];
    const findIt = numbers.find((number) => number > 5);
    console.log(findIt);
}
{
    //We want to return the first state which begings with C 
    /* 
    //Method 1: My Logic , which is also right
    const states = ['Alaska','Calfornia','Calorado','Hawaii'];
    const startingWithC = states.find((letter) => letter[0] == 'C');
    console.log(startingWithC); 
    */
    //Method 2:USing startsWith() method    
    const states = ['Alaska','Calfornia','Calorado','Hawaii'];
    const startingWithC = states.find((stateWithC) => stateWithC.startsWith('C'));
    console.log(startingWithC);
}
//==========Array Includes=================//
{
    const array = [1,2,3];
    console.log(array.includes(2));
    
    const pets = ['Dog','Cat','Sheep','Hamster'];
    console.log(pets.includes('Dog'));  
}
{
    const bookshelf = ["Moby Dick","The Great Gatsby","Pride and Prejudice"];
    if(bookshelf.includes("Moby Dick")){
        console.log('We have that book'); 
    }else{
        console.log('We do not have that book,sorry');
    }
}

//===============Array sort=================//
{
    const names = ['Anne','Carl','Bob','Dean'];
    names.sort();
    console.log(names);
}
{
    const numbers = [6,3,1,7,9,2];
    numbers.sort();
    console.log(numbers);
}
{
    const numbers = [1,56,99,63,3,5,7,90,23,19];
    numbers.sort();
    console.log(numbers);
}
{   
    //Ascending order 
    const numbers = [1,56,99,63,3,5,7,90,23,19];
    numbers.sort((a,b) => a - b);
    console.log(numbers);
}
{
    //Decending order
    const numbers = [1,56,99,63,3,5,7,90,23,19];
    numbers.sort((a,b) => b - a);
    console.log(numbers);
}
//==============Array Reduce============//
{
    //forEach method
    let sum = 0;
    const groceryList = [ 29, 12, 45, 35, 87, 110];
    groceryList.forEach((item) => {
        sum += item;
    }); 
    console.log(sum);
}
{
    //Reduce method
    const groceryList = [ 29, 12, 45, 35, 87, 110];
    const price = groceryList.reduce((accumulator,currentValue) => {
        return accumulator+currentValue;
    },0)
    console.log(price);
    //We set the value of accumulator to zero in the beginning
    //currentValue are the value of array which keeps adding to the accumulator during every iteration
}
{
    const numbers = [1,2,3,4,5];
    const total = numbers.reduce((accumulator,currentValue)=>{
        return accumulator+currentValue;
    },0)
    console.log(total);
}