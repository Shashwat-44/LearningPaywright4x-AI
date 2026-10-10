let million = 1_000_000;
let binary = 0b1010_0001;
let hexSep = 0xFF_FF_FF;
console.log("Million, Binary and HexSep:", million, binary, hexSep);

// 4. BIGINT - For arbitrarily large integers

let bigInt = 9007199254740991n; // BigInt literal
console.log("BigInt:", bigInt);
console.log("Type of BigInt:", typeof bigInt);

let bigInt2 = BigInt(9007199254740991); // Using BigInt constructor
let bigInt3 = BigInt(42);
let bigInt4 = BigInt("1234567890123456789012345678901234567890"); // Using string
console.log("BigInt2:", bigInt2);
console.log("BigInt3:", bigInt3);
console.log("BigInt4:", bigInt4);