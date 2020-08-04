


function checkObj(obj, checkProp) {
    // Only change code below this line
    console.log(checkProp);     // show prop passed in  
    console.log(obj);   // show obj
    console.log(obj[checkProp]);    // does prop exist in obj?
    console.log(obj.hasOwnProperty(checkProp)? obj[checkProp] : "Not Found");   // show not found if not exist in obj  
    return obj.hasOwnProperty(checkProp)? obj[checkProp] : "Not Found";
    // Only change code above this line
}

/*
Basic JavaScript: Testing Objects for Properties
Sometimes it is useful to check if the property of a given object exists or not. We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or false if the property is found or not.

Example

var myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top");    // true
myObj.hasOwnProperty("middle"); // false
Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp). If the property is found, return that property's value. If not, return "Not Found".

---
OUTPUT -  

// running tests
// tests completed
// console output

gift
{ gift: 'pony', pet: 'kitten', bed: 'sleigh' }
pony
pony
pet
{ gift: 'pony', pet: 'kitten', bed: 'sleigh' }
kitten
kitten
house
{ gift: 'pony', pet: 'kitten', bed: 'sleigh' }
undefined
Not Found
city
{ city: 'Seattle' }
Seattle
Seattle
district
{ city: 'Seattle' }
undefined
Not Found
*/

