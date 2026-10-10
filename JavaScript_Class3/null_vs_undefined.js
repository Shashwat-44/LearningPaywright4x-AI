// undefined: a variable exists but has not been assigned any value yet. 
// Javascript itself set this automatically 

let undefinedVal = undefined;
let undefinedVal1;
console.log(undefinedVal);
console.log(undefinedVal1);
console.log(typeof undefinedVal);
console.log(typeof undefinedVal1);

// null: a variable exists but the developer has explicitly assigned no value to it.
// Its intended to represent the absence of any object value.

let nullValue = null;
console.log(nullValue);
console.log(typeof nullValue); // returns object, this is a bug in javascript, it should return null but it returns object.

var x;
console.log(typeof x);
var y = null;
console.log(y);
console.log(typeof y);

let xy;
xy=10;
console.log(xy);
console.log(typeof xy);

/*
  | Feature              | undefined                     | null                           |
  |----------------------|-------------------------------|--------------------------------|
  | Meaning              | Not assigned yet              | Intentionally empty            |
  | Who sets it?         | JavaScript automatically      | Developer manually             |
  | Type                 | undefined                     | object (historical bug in JS)  |
*/