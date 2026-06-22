// Primitive Data Types>>>>>>>>>

// Definition: Primitive data types single value store karte hain aur value directly memory me store hoti hai.

// Types
// Number
// String
// Boolean
// Undefined
// Null
// BigInt
// Symbol

// Example
// let age = 22;
// let name = "Pragya";
// let isStudent = true;
// Key Point
// ✅ Stores actual value
// ✅ Copy by Value

// let a = 10;
// let b = a;
// b = 20;
// console.log(a); // 10
// console.log(b); // 20



// Number>>>>>>>>>>>>>>>>>>>>>>

// let balance = 120;
// let anotherBalance =new Number(120);
// console.log(balance);
// console.log(anotherBalance.valueOf());
// console.log(typeof balance);
// console.log(typeof anotherBalance);


// boolean>>>>>>>>>>>>>>>>>>
let isActive = true;
let isReallyActive = new Boolean(true)  //not recommended way


// null and underdefine>>>>>>>>>>>>>>>>

// let b=null;
// console.log(b);
// // here b value is null;

// let firstname;
// let lastname;
// console.log(firstname);
// console.log(lastname);
// it exists firstname but value is undefined;



// String>>>>>>>>>>>>>>>>

let myString = "hello";
let myStringOne = "hey";
let username = "Pragya";
let oldgreet = myString + " " + " Pragya";
// console.log(oldgreet);
let greetMessage = 'hello ${username} !';
let demoone='value is ${2 * 2}'
// console.log(demoone);
// console.log(greetMessage);

let sm1 = Symbol("pragya");
let sm2 = Symbol();
// console.log(sm1);




































































































































