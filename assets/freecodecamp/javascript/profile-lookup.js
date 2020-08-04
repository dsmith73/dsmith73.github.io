
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
    var answer, i;
    console.log(contacts.length + " is the arr len")
    for (i = 0; i < contacts.length; i++) {
        console.log(contacts[i].firstName + " is loop " + i)
        if (contacts[i].firstName === name) {
            console.log(contacts[i].firstName + " is the FN")
            contacts[i].hasOwnProperty( prop ) ?
                answer = contacts[i][prop] :
                answer = "No such property";
            console.log(answer)
            return answer
        } 
    }
    answer = "No such contact"
    console.log(answer)
    return answer
}



// Tests 
lookUpProfile("Akira", "likes");
lookUpProfile("Sherlock", "likes");
lookUpProfile("Harry", "likes");
lookUpProfile("Bob", "likes");
lookUpProfile("Akira", "thinks");
lookUpProfile("Kristian", "lastName");
lookUpProfile("Sherlock", "number");
