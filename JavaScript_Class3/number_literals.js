// Topic: All Number Types in JavaScript
/*
  In JavaScript, numbers are ALWAYS of type "number" (except BigInt).
  There is no separate int, float, double, etc.
*/
let count = 100;
let negative = -100;
let zero = 0;
let decimal = 10.5;
let exponential = 1.5e3; // 1.5 * 10^3
let binary = 0b1010;
let octal = 0o12;
let hexadecimal = 0xA;
let bigInt = 9007199254740991n; // BigInt literal
let colour_hex = "#FF5733"; // Hexadecimal color literal
let octa = 0o17; // Octal literal
let million = 1_000_000; // Numeric literal with underscores for readability
let millions = 1e6; // Exponential notation literal
let tiny = 1.5e-3; // Exponential notation literal for small numbers

console.log(count);
console.log(negative);
console.log(zero);
console.log(decimal);
console.log(exponential);
console.log(binary);
console.log(octal);
console.log(hexadecimal);
console.log(bigInt);
console.log(colour_hex);
console.log(octa);
console.log(million);
console.log(millions);
console.log(tiny);

console.log(typeof count); 
console.log(typeof negative);
console.log(typeof zero);
console.log(typeof decimal);
console.log(typeof exponential);
console.log(typeof binary);
console.log(typeof octal);
console.log(typeof hexadecimal);
console.log(typeof bigInt);
console.log(typeof colour_hex);
console.log(typeof octa);
console.log(typeof million);
console.log(typeof millions);
console.log(typeof tiny);

let colours_hex = 0xFF0000;
console.log(colours_hex);
console.log(typeof colours_hex);

console.log(0b1010 + 0o10 + 0xA) 
console.log([1, , 2, 3, , 4, ].length);