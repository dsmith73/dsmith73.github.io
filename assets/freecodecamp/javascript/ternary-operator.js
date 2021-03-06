/*
Basic JavaScript: Use the Conditional (Ternary) Operator
The conditional operator, also called the ternary operator, can be used as a one line if-else expression.

The syntax is:

condition ? statement-if-true : statement-if-false;

The following function uses an if-else statement to check a condition:

function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
This can be re-written using the conditional operator:

function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater";
}
Use the conditional operator in the checkEqual function to check if two numbers are equal or not. The function should return either "Equal" or "Not Equal".
*/

function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";

}

checkEqual(1, 2);

// Tests 
checkEqual(1, 2) //should return "Not Equal"
checkEqual(1, 1) //should return "Equal"
checkEqual(1, -1) //should return "Not Equal"



/*
Basic JavaScript: Use Multiple Conditional (Ternary) Operators
In the previous challenge, you used a single conditional operator. You can also chain them together to check for multiple conditions.

The following function uses if, else if, and else statements to check multiple conditions:

function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  }
  else if (a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
The above function can be re-written using multiple conditional operators:

function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}
It is considered best practice to format multiple conditional operators such that each condition is on a separate line, as shown above. Using multiple conditional operators without proper indentation may make your code hard to read. For example:

function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}
In the checkSign function, use multiple conditional operators - following the recommended format used in findGreaterOrEqual - to check if a number is positive, negative or zero. The function should return "positive", "negative" or "zero".
*/

function checkSign(num) {
return (num === 0) ? 
    "zero" : 
    (num > 0) ? 
        "positive" : 
        "negative";
}

// Tests
checkSign(10);
checkSign(10) //should return "positive". Note that capitalization matters
checkSign(-12) //should return "negative". Note that capitalization matters
checkSign(0) //should return "zero". Note that capitalization matters









