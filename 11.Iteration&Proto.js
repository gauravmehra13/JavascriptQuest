//Q1 Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype.

let parent = {
    name: "Walter White",
    nationality: "America",
    occupation: "Chemistry Teacher"
};

let child = {
    name: "Walt Jr"
};

child.__proto__ = parent;
console.log(child.occupation);


//Q2 Write code to explain prototype chaining.

let obj = {
    name: "Gaurav Mehra",
    age: 24,
    institute: "DITU"
};

function Obj(givenName){
    this.name = givenName;
}

let obj2 = new Obj("Salman Khan");
console.log(obj2);

//Q3 Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays.

let arr = new Array(3, 15, 21, 5, 15);
arr.__proto__.sum = function(givenArray){
    let sum = 0;
    for(let i of givenArray){
        sum += i;
    }
    return sum;
}
let x = arr.sum(arr);
console.log(x);

let arr2 = new Array(32, 17, 35, 23, 36);
let y = arr2.sum(arr2);
console.log(y);

//Q4 Write a JavaScript function to retrieve all the names of object's own and inherited properties.

function one() {
    this.name = "Gaurav Mehra"
    this.rollno = "007"
    two.call(this)
}

function two() {
    this.age = "24"
    this.college = "DITU"
}
let branch = new one();
console.log(branch);


