// Non-Primitive Data Types>>>>>>>>>

// Definition: Non-primitive data types multiple values store kar sakte hain aur memory address/reference store karte hain.

// Types>>>>>>>>>>>
// Object
// Array
// Function

// Example>>>>>>>>>>
// let person = {
//   name: "Pragya",
//   age: 22
// };

// let fruits = ["Apple", "Mango"];
// function greet() {
//   console.log("Hello");
// }

// Key Point>>>>>>>>>>>>>>
// ✅ Stores reference/address
// ✅ Copy by Reference

// let obj1 = {name: "Pragya"};
// let obj2 = obj1;
// obj2.name = "Gupta";
// console.log(obj1.name); // Gupta

// Primitive Data Types store actual values directly in memory and are copied by value.
// Non-Primitive Data Types store references (memory addresses) and are copied by reference.

// One-Line Trick
// Primitive = Single Value + Copy by Value
// Non-Primitive = Multiple Values + Copy by Reference

// Examples:>>>>>>>>>>>
// Primitive → Number, String, Boolean, Undefined, Null, BigInt, Symbol
// Non-Primitive → Object, Array, Function ✅

// Object

// Definition: Object key-value pairs ka collection hota hai jo related data ko store karta hai.
// let person = {
//   name: "Pragya",
//   age: 22
// };

// Array

// Definition: Array multiple values ko ek hi variable me store karne ke liye use hota hai.
// let fruits = ["Apple", "Mango", "Banana"];

// Function

// Definition: Function reusable code block hota hai jo ek specific task perform karta hai.
// function greet() {
//   console.log("Hello");
// }

// One-Line Notes 
// Object → Stores data in key-value pairs.
// Array → Stores multiple values in a single variable.
// Function → Reusable block of code that performs a specific task.

// Memory Trick 
// Object   → Key + Value
// Array    → Multiple Values
// Function → Reusable Code



// object>>>>>>>>

// object me we use , not ; >>>>>>>

const username = {
    "firstname": "Pragya" ,
    isLoggedin: true ,
};

username.firstname = "Ms. P";
username.lastname ="Gupta";

// console.log(username["firstname"]);
// console.log(username.lastname);
// console.log(username);
// console.log(typeof username);


let today = new Date();
// console.log(today.getDate());

// Array>>>>>>>>>>>>

let anotheruser = ["Pragya" , true];
// console.log(anotheruser[0]);
let isValue = true;
console.log(typeof(isValue) + 1); //2 boz js consider true is 1 and false is 0;
console.log(Number(undefined));


