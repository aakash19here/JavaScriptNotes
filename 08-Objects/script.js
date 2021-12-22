//==================Intro===============//
{
    const person = {
        firstName:'Tom',
        lastName:'Cruise',
        age:40,
    }
}
{   
    const firstName = 'Dean'
    const person = {
        firstName:firstName,
        lastName:'Cruise',
        age:40,
        car:{
            brand:'Toyota',
            year:2015,
            color:'black',
        }
    }   
    console.log(person);
}
//===========Accessing,Adding,Updating Prooperties============//
{
    //Acessing Property
    const person = {
        firstName:'Mark'
    }
    console.log(person.firstName);
}
{
    const person = {
        firstName:'Brad'
    }
    person.dog = {name:'fluffy',age:2};
    console.log(person.dog.name);
}
{
    const person = {
        firstName:'Brad',
        age:25
    }
    const property = 'age';
    console.log(person[property]);
}
//===============Method========================//
{
const myObj = {
	//Way 1 
    myMethod :() => {
		
	},
    //Way 2
    myMethod1 : function(){

    },
    //Way 3
    myMethod2(){

    }
}
}
{
    const dog = {
        name:'fluffy',
        bark: () => {
            console.log('Woof '.repeat(5));
        }
    }
    dog.bark(); //Call the function 
}
{
    //Logging all the properties at one using function and this keyword 
    const dog = {
        name:'fluffy',
        age:2,
        listAllProperties: function(){
            console.log(this.name,this.age);
            //We don't need to refer to the dog because we are already inside the object
        }
     }
     dog.listAllProperties();

}
//============Built-in Method=================//
//------Object.keys();-------------------//
{
    const employees = {
        boss:'Micheal',
        secretary:'Pam',
        sales:'Jim',
        accountant:'Oscar'
    };
    const positions = Object.keys(employees);
    console.log(positions);
}
//------Object.values();-------------------//
{
    const session = {
        id:1,
        time: '29-July-2018',
        device:'mobile',
        browser:'Chrome'
    }
    const sessionInformation = Object.values(session);
    console.log(sessionInformation);
}
//------Object.entries();-------------------//
{
    const operatingSystem = {
        name:'Ubantu',
        version: 18.2,
        license:'Open Source'
    }
    const entries = Object.entries(operatingSystem);
    console.log(entries);  
    entries.forEach((entry) => {
        let key = entry[0];
        let value = entry[1];
        console.log(`${key} -> ${value}`);
    })
}
//------Object.freeze();-------------------//
{
    const user = {
        username: 'John',
        password: '12221'
    };
    const admin = Object.freeze(user);
    user.username = 'Johnny';
    console.log(user);
}
//----Object.seal();-----------------------//
const user =  {
    username:'Cardi',
    password:'345432'
}
const seal = Object.seal(user);
user.DOB = '19-Dec-2003';
user.username = 'Cardi is Changed';
console.log(user);