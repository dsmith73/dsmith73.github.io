/*
Debugging: Use typeof to Check the Type of a Variable
You can use typeof to check the data structure, or type, of a variable. This is useful in debugging when working with multiple data types. If you think you're adding two numbers, but one is actually a string, the results can be unexpected. Type errors can lurk in calculations or function calls. Be careful especially when you're accessing and working with external data in the form of a JavaScript Object Notation (JSON) object.

Here are some examples using typeof:

console.log(typeof ""); // outputs "string"
console.log(typeof 0); // outputs "number"
console.log(typeof []); // outputs "object"
console.log(typeof {}); // outputs "object"
JavaScript recognizes six primitive (immutable) data types: Boolean, Null, Undefined, Number, String, and Symbol (new with ES6) and one type for mutable items: Object. Note that in JavaScript, arrays are technically a type of object.

Add two console.log() statements to check the typeof each of the two variables seven and three in the code.
*/

let seven = 7;
let three = "3";
console.log(seven + three);

console.log(typeof seven)
console.log(typeof three)




/*
Debugging: Use Caution When Reinitializing Variables Inside a Loop
Sometimes it's necessary to save information, increment counters, or re-set variables within a loop. A potential issue is when variables either should be reinitialized, and aren't, or vice versa. This is particularly dangerous if you accidentally reset the variable being used for the terminal condition, causing an infinite loop.

Printing variable values with each cycle of your loop by using console.log() can uncover buggy behavior related to resetting, or failing to reset a variable.

The following function is supposed to create a two-dimensional array with m rows and n columns of zeroes. Unfortunately, it's not producing the expected output because the row variable isn't being reinitialized (set back to an empty array) in the outer loop. Fix the code so it returns a correct 3x2 array of zeroes, which looks like [[0, 0], [0, 0], [0, 0]].
*/

function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    let row = [];
    let i,j = 0
    for (i = 0; i < m; i++) {
      // Adds the m-th row into newArray
        for (j = j; j < n; j++) {
        // Pushes n zeroes into the current row to create the columns
        row.push(0);
        }
      // Pushes the current row, which now has n zeroes in it, to the array
        newArray.push(row);
    }
    return newArray
}

let matrix = zeroArray(3, 2);
let matrix1 = zeroArray(1, 2);
let matrix2 = zeroArray(2, 1);
console.log(matrix);
console.log(matrix1);
console.log(matrix2);





