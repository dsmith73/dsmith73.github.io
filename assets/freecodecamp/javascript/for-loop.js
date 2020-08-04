
var myArray = [];

for (var i = 1; i < 6; i++) {
    myArray.push(i)
}
console.log(myArray)



var myArray = [];

for (var i = 1; i < 10; i += 2) {
    myArray.push(i)
}
console.log(myArray)


// reverse 
var myArray = [];

for (var i = 1; i < 10; i += 2) {
    myArray.unshift(i)
}
console.log(myArray)



var myArray = [];

for (var i = 9; i > 0; i -= 2) {
    myArray.push(i)
}
console.log(myArray)



var myArr = [ 2, 3, 4, 5, 6];

var total=0
for (var i = 0; i < myArr.length; i++) {
    total = total + myArr[i]
    console.log(total);
}


// multiply all elements in sub-array  
function multiplyAll(arr) {
    var product = 1;
    for (var i = 0; i < arr.length; i++) {
        for (var h = 0; h < arr[i].length; h++) {
            product = product * arr[i][h]
            console.log(product)
        }
    }
return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);


// get all elements in sub-array  
var arr = [
    [1,2], [3,4], [5,6]
  ];
  for (var i=0; i < arr.length; i++) {
    for (var j=0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
    }
  }
