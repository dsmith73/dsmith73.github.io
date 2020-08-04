/*
Basic JavaScript: Use the parseInt Function
The parseInt() function parses a string and returns an integer. Here's an example:

var a = parseInt("007");

The above function converts the string "007" to an integer 7. If the first character in the string can't be converted into a number, then it returns NaN.

Use parseInt() in the convertToInteger function so it converts the input string str into an integer, and returns it.
*/

function convertToInteger(str) {
    return parseInt(str);

}

// Tests
convertToInteger("56");
convertToInteger("77") //should return 77
convertToInteger("JamesBond") // return NaN


/*
Basic JavaScript: Use the parseInt Function with a Radix
The parseInt() function parses a string and returns an integer. It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36.

The function call looks like:

parseInt(string, radix);

And here's an example:

var a = parseInt("11", 2);

The radix variable says that "11" is in the binary system, or base 2. This example converts the string "11" to an integer 3.

Use parseInt() in the convertToInteger function so it converts a binary number to an integer and returns it.
*/

function convertToInteger(str) {

    return parseInt(str, 2);

}

// Tests
convertToInteger("10011") //should return a number
convertToInteger("10011") //should return 19
convertToInteger("111001") //should return 57
convertToInteger("JamesBond") //should return NaN


