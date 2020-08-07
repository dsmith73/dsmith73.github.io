// const creates read-only vars

function printManyTimes(str) {
    "use strict";

    const SENTENCE = str + " is cool!";
    for (let i = 0; i < str.length; i+=2) {
        console.log(SENTENCE);
    }

}
printManyTimes("freeCodeCamp");



const s = [5, 7, 2];
function editInPlace() {
  'use strict';
  // Only change code below this line
s.unshift(2)
s.push(7)
s.pop(s.pop())
  // Using s = [2, 5, 7] would be invalid
console.log(s)
  // Only change code above this line
}
editInPlace();

