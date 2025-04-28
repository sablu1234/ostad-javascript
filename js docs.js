// variable, array, loop, conditions, functions

// variable -> var, let, const


// Re-declaration is allowed in var,Re-assignment is allowed in var.
// var x;
// x=10;
// var x= 'apple';
// console.log(x);


// let a Re-declaration is not allowed, but re-assignment is allowed.
// let x ;
// x= 5;
//  x = 'apple';
// console.log(x);


// Re-declaration is not allowed in const, Re-assingment is not allowed.
// const x = 15;
// x = 8;
// console.log(x);


// letter ,digits, underscore, dollar sign thakte parbe variable a.
// msut start with letter.
// can start with underscore and dollar sign.
// case sensitive => x and X are different variables.
// cannot use reserved keywords => const let= 5, const function = "addition"

// cases
// camelcase => firstName, lastName, fullName = JS
// snakecase => first_name, last_name, full_name = python
// kebabcase => first-name, last-name, full-name 
// pascalcase => FirstName, LastName, FullName = C#

// JS DATA TYPES
// Number-> integer, float, double=> (0,1,2,3,4,5,6,7,8,9),(0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9),(1.23456789)
// String -> "apple", 'banana', `orange`
// Boolean -> true, false
// BigInt -> 1234567890123456789012345678901234567890n
// Undefined -> undefined
// Null -> Null
// Symbol -> Symbol('description')
// Object->array, object, date

// let y = BigInt("3216464646434357664564654");
// console.log(y);

// Object Data Types

// Object
// {} => curly brackets
// [] =>square brackets
// () => round brackets

// const person = {
//     name: "john",
//     age: 30,
//     city: "New York",
//     hasChildren: false,
// };
// const y =5;
// console.log(person.name);
// console.log(person.age);
// console.log("My name is Prince");
// console.log(person['name']);

// console.log("My name is "+ person.name + " and i am " + person.age + " years old.");
// `` (backtick) => template literal
// console.log(`my name is ${person.name} and i am ${person.age} years old. ${y}`);


// Array
const fruits = ['apple', 'banana', 'orange'];

const person = ['john', 30, 'New York', false];


fruits[0] = 'kiwi';

// adding element end of the array
// fruits.push('mango');
// console.log(fruits);

// removing element end of the array
// fruits.pop();
// console.log(fruits);

// adding element begining of the array
// fruits.unshift('pineapple');
// console.log(fruits);


// Removing element begining of the array
// fruits.shift();
// console.log(fruits);

// Date
// const date = new Date("2024-05-28");
// console.log(date);

// Checking variable type
// const fristName = "Prince";
// console.log(typeof fristName);

// Operators
// Arithmetic => +, -, *, /, %, **, ++, --
// let x = 5;
// let y = 10;

// let result = x * y; // addition
// console.log(result);

// Logical operators => &&, ||, !
// || => OR
// && => AND
// ! => NOT

// T | T = T
// T | F = T
// F | T = T    
// F | F = F

// && T| T = T
// && T| F = F 
// && F| T = F
// && F| F = F

// ! T = F
// ! F = T

// let x = true;
// let y = !x;
// console.log(y);

// Comparison Operators => ==, ===, !=, !==, >, <, >=, <=

// let x= 5 === '5';
// console.log(x);

// Conditions
// if, else if, else
// let age = 20;
// if(age >= 22){
//     console.log("You are an adult.");
// }
// else{
//     console.log("You are can\'t minor.");
// }

// let marks = 85;
// if(marks>= 90){
//     console.log("A+");
// }
// else if(marks>= 80 && marks<90){
//     console.log("A");
// }
// else if(marks>= 70 && marks<80){
//     console.log("B+");
// }
// else if(marks>= 60 && marks<70){
//     console.log("B");
// }
// else if(marks>= 50 && marks<60){
//     console.log("C+");
// }
// else if(marks>= 40 && marks<50){
//     console.log("C");
// }
// else{
//     console.log("F");
// }   


// ternary operator
// let age = 2;
// age>=18 ? console.log('you are voter') : console.log('your are not voter');

// Nulish coalescing operator
// const userInput = undefined;
// const userName = userInput ?? "Guest";
// console.log(userName);

// let marks = 85;

// switch(marks){
//     case 90:
//         console.log("A+");
//         break;
//     case 80:
//         console.log("A");
//         break;
//     case 70:
//         console.log("B+");
//         break;
//     case 60:
//         console.log("B");
//         break;
//     case 50:
//         console.log("C+");
//         break;
//     case 40:
//         console.log("C");
//         break;
//     default:
//         console.log("F");
// }


// Functions
let x = 5;
let y = 10;
let result = x+y;
console.log(result);

let a = 5;
let b = 10;
let sum = a+b;
console.log(result);

// Function Declaration
// function add(x,y){
//     let sum = x+y;
//     return sum;
// }
// let res1= add(5,10);
// let res2= add(5,15);
// console.log(res1);
// console.log(res2);


// function add(x,y){
//     let sum = x+y;
//    console.log(sum);
// }

// add(5,10);