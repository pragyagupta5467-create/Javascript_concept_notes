// 1. Write a function named makeTea that takes one parameter, typeOfTea, and returns a string like "Making green tea" when called with "green tea". Store the result in a variable named teaOrder.

function makeTea(typeOfTea){
   return 'Making ${typeOfTea}';
   console.log(test);
}
let teaOrder = makeTea("lemon tea");
// console.log(teaOrder);



// 2.Create a function named orderTea that takes one parameter, teaType. Inside this function, create another function named confirmOrder that returns a message like "Order confirmed for chai". Call confirmOrder from within orderTea and return the result.

function orderTea(teaType){
    function confirmOrder(){
        return 'Order confirmed for chai';
    }
    return confirmOrder()
}

let orderConfirmation = orderTea ("chai");
// console.log(orderConfirmation);



// 3.Write an arrow function named calculateTotal that takes two parameters: price and quantity. The function should return the total cost by multiplying the price and quantity. Store the result in a variable named totalCost.
// Arrow Function Definition:
// An Arrow Function is a shorter and modern way (introduced in ES6) to write functions in JavaScript using the => arrow operator. It makes the code cleaner and easier to read.

// 1. Arrow Function with No Parameter
// const greet = () => {
//     return "Hello!";
// };
// console.log(greet());
// Output: Hello!
// 2. Arrow Function with One Parameter
// const square = (num) => {
//     return num * num;
// };
// console.log(square(5));
// Output: 25
// 3. Arrow Function with Two Parameters
// const add = (a, b) => {
//     return a + b;
// };
// console.log(add(10, 20));
// Output: 30
// 4. Arrow Function with Three Parameters
// const totalMarks = (math, science, english) => {
//     return math + science + english;
// };
// console.log(totalMarks(80, 85, 90));
// Output: 255
// One-Line Arrow Function (Implicit Return)
// const multiply = (a, b) => a * b;
// console.log(multiply(5, 4));
// Output: 20

// const calculateTotal = (price, quantity) =>  price * quantity 
// let totalCost = calculateTotal (499 * 100)



// 4.Write a function named processTeaOrder that takes another function, makeTea, as a parameter and calls it with the argument "earl grey". Return the result of calling makeTea.

function makeTea () {} 
function processTeaOrder (teaFuncton) {
    return teaFuncton ('earl grey') ;
}

let order = processTeaOrder (makeTea)
console.log(order);




// 5. Write a function named `createTeaMaker` that returns another function.
// The returned function should take one parameter, `teaType`, and return a
// message like "Making green tea".
// Store the returned function in a variable named `teaMaker` and call it
// with "green tea".

function createTeaMaker (name) {
    return function (teaType) {
        return 'Making ${teaType} ${name}' ;
    };
}

let teaMaker = createTeaMaker ("Pragya") ;
let result = teaMaker ("green tea") ;
console.log(result);