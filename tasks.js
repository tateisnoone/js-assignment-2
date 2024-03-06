// //task 1
// Write function `f` that return a cube of a number. The number is passed as a parameter. This function checks for input parameter, function can accept only a number.
// f(2); // 8
// f('Content'); // Error: parameter type is not a Number

function f(a) {
  if (typeof a !== "number") {
    throw new Error("parameter type is not a Number");
  } else console.log(a ** 3);
  return a ** 3;
}
f(3);

//task 2
// Write function `f` that returns the sum of all parameters. The list of parameters can be any. This function has to validate input parameters, because function can accept only numbers.
// f(1,2,3); // 6
// f(1,1,1,1,1,1,1,1); // 8
// f(1,2,'s',4); // Error: all parameters type should be a Number
// Now handle error and log message in consoleww

function sum(...args) {
  let sum2 = 0;
  for (i = 0; i < args.length; i++) {
    sum2 += args[i];
    if (typeof args[i] === "number") {
    } else {
      throw new Error("parameter is not a number");
    }
  }
  console.log(args);
  return sum2;
}
var result = sum(1, 2, 1, 1, 3, 4);
console.log(result);

//task 3
// Write function `f` that takes a parameter from 1 to 7, and returns the day of the week in Georgian. This function has to validate the input parameter, function can accept only a number from 1 to 7.
// f(1); // Sunday
// f(2); // Monday
// f(8); // Error: parameter should be in the range of 1 to 7
// f('1'); // Error: parameter type is not a Number
// Now handle error and log message in console

function days(b) {
  if (typeof b === "number") {
    switch (b) {
      case 1:
        console.log("ორშაბათი");
        break;
      case 2:
        console.log("სამშაბათი");
        break;
      case 3:
        console.log("ოთხშაბათი");
        break;
      case 4:
        console.log("ხუთშაბათი");
        break;
      case 5:
        console.log("პარასკევი");
        break;
      case 6:
        console.log("შაბათი");
        break;
      case 7:
        console.log("კვირა");
        break;
      default:
        throw new Error("parameter should be in the range of 1 to 7");
    }
  } else {
    throw new Error("parameter type is not a Number");
  }
}
days(4);

//task 4
// Create the function `isEven ()` that takes a number as a parameter and checks whether this number is even or not. If even, the function returns `true`, if odd -` false`. This function have to validate the input parameter, function can accept only a number.
// isEven(3); // false
// isEven(4); // true
// isEven('Content'); // Error: parameter type is not a Number
// Now handle error and log message in console

function isEven(x) {
  if (typeof x === "number") {
    if (x % 2 == 0) {
      console.log(true);
    } else console.log(false);
  } else {
    throw new Error("parameter type is not a Number");
  }
}
isEven(4);

//task 5
// You have the array with numbers `[1, 2, -4, 3, -9, -1, 7]`. Create a new array from this array with only positive numbers `[1, 2, 3, 7]` will remain. Create for this an additionnal function `isPositive (-3)` that will accept a number as a parameter and return true if the number is positive, and false if number is negative. This function has to validation the input parameter, because function can accept only a number.

// *To add a new item to the end of the array, use the push method.*

// ```js
// // Example of using isPositive()
// isPositive(-3) // false
// isPositive(3) // true
// isPositive('s') // Error: parameter type is not a Number

// // Example of using push()
// var arr = [8];
// arr.push(2);
// console.log(arr[1]);
// ```

// Now handle error and log message in console

let arr1 = [1, 2, -4, 3, -9, -1, 7];
let arr2 = [];
function isPositive() {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > 0) {
      arr2.push(arr1[i]);
      console.log(arr1[i]);
      console.log(true);
    } else {
      console.log(arr1[i]);
      console.log(false);
    }
  }
  console.log(arr2);
}
isPositive();
