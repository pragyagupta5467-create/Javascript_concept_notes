console.log("hello");
// In Js comment is two types single line and multiline comment>>>
// console.log("coffee");// single line comment>>>>>
/*
    multiline comment;
*/


// Datatypes >>>>>>>>>>>>>>>>

// 1. Primitive Data Types>>>

// Definition: Primitive data types single value store karte hain aur value directly memory me store hoti hai.
// Types
// Number → Numeric values (10, 20.5)
// String → Text values ("Pragya")
// Boolean → true / false
// Undefined → Variable declared but value not assigned
// Null → Intentionally empty value
// BigInt → Very large integers
// Symbol → Unique identifier
// Key Point: Copy by Value 

// 2. Non-Primitive (Reference) Data Types>>>

// Definition: Non-primitive data types multiple values store kar sakte hain aur reference (address) store karte hain.
// Types
// Object → Key-value pairs
// Examples of onject>>
let teatypes=["lemon tea","orange tea","oolong tea"];
let user={firstname:"pragya",lastname:"Gupta"};
console.log(teatypes);
console.log(user);

// Array → Collection of values
// Function → Reusable block of code
// Key Point: Copy by Reference 

// var, let, const>>>>>>>>>>>>>>>>>>>>>>>>>>>
// var

// Definition: Old way to declare variables in JavaScript.
// var age = 22;
// Features
// Re-declare ✅
// Re-assign ✅
// Function Scope
// Avoid in modern JS
// Examples:
let score=102;
let name="Pragya";
let isLoggedin=false;
console.log(score);
console.log(name);
console.log(isLoggedin);

// let

// Definition: Modern variable declaration used when value can change.
// let age = 22;
// Features
// Re-declare ❌
// Re-assign ✅
// Block Scope

// const

// Definition: Used when value should not change.
// const PI = 3.14;
// Features
// Re-declare ❌
// Re-assign ❌
// Block Scope
// Quick Interview Table
// Feature	var	let	const
// Re-declare	✅	❌	❌
// Re-assign	✅	✅	❌
// Scope	Function	Block	Block
// Modern JS	❌	✅	✅

// Golden Rule ⭐
// const → Default choice
// let → When value changes
// var → Avoid in modern JavaScript

// Memory Trick:
// Primitive = Single Value + Copy by Value
// Non-Primitive = Multiple Values + Copy by Reference
// const > let > var (preference order) ✅

let getscore=score;
console.log(getscore);