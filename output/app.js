"use strict";
// types system in typescript 
// --------------------------------------
// function age(a: number,b:number){
//     return a+b
// }
// console.log(age(1,5));
// arrays 
/* let fruits = ['mango', 'banana', 'apple', 'orange']
let price = [2,3,6,2,3, '', {}]

fruits.push('coconuts')
price.push(13)
price.push('13')
price.push('another')
price.push({
    name: 'kabir',
    age: 22
});
console.log(price); */
// object 
/* const myObj = {
    name: 'shakib',
    age: 33,
    isCaptain: true
}

myObj.isCaptain = false
console.log(myObj); */
// Explicit & Union
// ----------------------------
//  variable 
/* let a: number | string | boolean
a = 33
a = true
a = 'string' */
// arrays 
/* let myArr: (string| number)[] = []
myArr.push(33, 'string')
console.log(myArr); */
// Object 
let myOb; /* j:{
    name: string,
    age: number,
    isSingle: boolean,
    name2: string
}

myObj ={
    name: 'sk',
    age: 22,
    isSingle: true,
    name2: 'pixel'
}
console.log(myObj); */
// Dynamic Type
// ----------------------
/* let a: any
a = 33
a= 'string' */
// arrays 
/* let a:any[] = []
a.push('string',33,true) */
// Object 
/* let myObj:{
    name: any,
    age: number
}

myObj = {
    name: 'kabir',
    age: 33,
    
} */
// How to use Functions in ts
// -----------------
const func1 = (a, b, c) => {
    return a + b;
};
const result = func1(2, 5, false);
console.log(result);
/* let fun2: Function;

fun2 = ()=>{
    console.log('object');
}
fun2() */ 
