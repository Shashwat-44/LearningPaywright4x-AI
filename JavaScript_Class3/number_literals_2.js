// Topic: All Number Types in JavaScript
/*
  In JavaScript, numbers are ALWAYS of type "number" (except BigInt).
  There is no separate int, float, double, etc.
*/
// Number Literals - Integer
let decimal = 42;
console.log("Decimal:", decimal);

let binary = 0b101010; // Binary literal
console.log("Binary:", binary);

let Octal = 0o52; // Octal literal
console.log("Octal:", Octal);

let hexadecimal = 0x2A; // Hexadecimal literal
console.log("Hexadecimal:", hexadecimal);

// Number Literals - Floating Point (Decimal)
let floatNum = 3.14;
let floatNum2 = -0.1;
let floatNum3 = .5; // Leading decimal point (avoid)
let floatNum4 = 5.; // Trailing decimal point (avoid)
console.log("Floating Point Numbers:", floatNum, floatNum2, floatNum3, floatNum4);

// Number Literals - Exponential Notation
let exp1 = 1.5e3;
let exp2 = 2.5e-4;
let exp3 = 1.5e-3;
let exp4 = 2E10;
console.log("Exponential Notation:", exp1, exp2, exp3, exp4);