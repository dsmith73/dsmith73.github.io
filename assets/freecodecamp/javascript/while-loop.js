// ascending  
var myArray = [];

var i = 0;
while(i < 5) {
  myArray.push(i);
  i++;
}
console.log(myArray)

// descending 1
var myArray = [];

var i = 5;
while(i >= 0) {
  myArray.push(i);
  i--;
}
console.log(myArray)

// descending 2
var myArray = [];

var i = 0;
while(i < 6) {
  myArray.unshift(i);
  i++;
}
console.log(myArray)
