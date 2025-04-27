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


