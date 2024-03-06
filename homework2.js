// Create function `f` that takes array as parameter and then displays elements of this array on the screen using for loop. This function has to validate an input parameter.
// validations are the following:

// - Passed parameter has to be array.
// - Passed array can not be empty.
// - Passed array can only contain numbers.

// ```js
// f([1, 2, 3]);
// // 1
// // 2
// // 3
// f(1, 2, 3); // Error: parameter type should be an array
// f("Content"); // Error: parameter type should be an array
// f([]); // Error: parameter can't be an empty
// f(["🧛🏼", "👨🏽‍🔧",5, "dogs"]); // Error: parameter type should be array of numbers
// ```

// Now handle error and log message in console

function f(arr) {
  if (typeof arr === "object") {
    if (arr.length > 0) {
      for (let i = 0; i < arr.length; i++) {
        {
          if (typeof arr[i] === "number") {
            console.log(arr[i]);
          } else {
            throw new Error("parameter type should be array of numbers");
          }
        }
      }
    } else {
      throw new Error("parameter can't be an empty");
    }
  } else {
    throw new Error("parameter type should be an array");
  }
}
f([1, 2, 3, 4, 5]);
