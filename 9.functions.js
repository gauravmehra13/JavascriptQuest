//Create one function with zero parameter having a console statement;

function gaurav() {
  console.log("hello");
}

gaurav();

//Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"

function sum(a, b) {
  console.log("sum of 3,4 is", a + b);
}

sum(3, 4);

//Create one arrow function

let test = (a, b) => {
  console.log(a - b);
  return a + b;
};

test(60, 30);

//print output

var x = 21;
var girl = function () {
  console.log(x);
  var x = 20;
};
girl(); //output=undefined

//print output

var x = 21;
girl();
console.log(x);
function girl() {
  console.log(x);
  var x = 20;
} //output=21 (line56),undefined(line 58)

//print output

var x = 21;
a();
b();
console.log(a);
a = function () {
  x = 20;
  console.log(x);
};
b = function () {
  x = 40;
  console.log(x);
}; //output = 20,40

//Write a function that accepts parameter n and returns factorial of n
let fact = 1;

function facto(n) {
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }

  console.log(fact);
}

facto(5);
