//==================Global Scope=====================// 
const personName = "John";
const logName = () => {
	console.log(personName);	
}
logName();

//Disadvantage of global variables 
let _name = 'Ak';
const log_name = () => {
    console.log(_name);
    _name = 'Aakash';
}
log_name();
console.log(_name);

//Automatically Global
myFunction();
console.log(`${carName} is a good car`);
function myFunction() {
  carName = "Volvo";
}
  
//==================Local Scope=====================// 
const someFunction = () =>{
    //Local scope #1
    const  $name = 'AakashOP';
    console.log($name);
        const anotherFunction = () => {
            //Local scope #2 
            console.log($name + ' hello');
        }
    anotherFunction();
} 
//console.log($name); It will give error
someFunction();

// const func = () => {
//     console.log(first__name);
//     const func2 = () =>{
//         const first__name = 'Aakash'; 
//     }
//     func2();
// }
// func();
const func = () => {
    const name = 'Akash is in same named variable i.e name';
    console.log(name)
    const func2 = () => {
        const name = 'ak is in same named variable i.e name';
        console.log(name);
    }
    func2();
}
func();

//=============Block Scope===============//
if(true){
     yourName = 'aakash';
     console.log(yourName);
}
// console.log(yourName); we do not have access to it outside 
 

//=============Closure==================//
const outer = () =>{
    const outerVar = 'Hello!';
    const inner = () => {
        const innerVar = 'Hi!';
        console.log(outerVar,innerVar);
    }
    return inner;
}
const innerFn = outer();
innerFn();