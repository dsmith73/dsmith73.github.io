/*
ES6: Use the Rest Parameter with Function Parameters
In order to help us create more flexible functions, ES6 introduces the rest parameter for function parameters. With the rest parameter, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.

Check out this code:

function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // You have passed 3 arguments.
console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.
The rest parameter eliminates the need to check the args array and allows us to apply map(), filter() and reduce() on the parameters array.

Modify the function sum using the rest parameter in such a way that the function sum is able to take any number of arguments and return their sum.
*/

const sum = (x, y, z) => {
    const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
  }

// becomes

function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
}

sum(1,2,3,4,5,6,7,8,9,202,193)
sum(5)
sum(0,1,2)
sum()

// OR

const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}


