//Q1
function counter(){
    var counter = 0;
    function IncreaseCounter() {
        return counter += 1;
    };
    return IncreaseCounter;
}
var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());

// 1,2,3,4 is alerted


//Q2
let count = 0;
(function () {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged?
  }
  console.log(count); // What is logged?
})();

//1,0

//Q3
for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, 1000);
}

// 3


//Q4
(function rectangle(l){
  let length = l;
  (function area(b) {
    let breadth = b;
    console.log(length * breadth);
  })(3)
})(2)

// 6


//Q5
function counter(){
  var counter = 0;

  function IncreaseCounter() {
      return counter += 1;
  };

  return IncreaseCounter;
}

var counter = counter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());


//1,2,3,4


//Q6
var a = 12;
(function () {
  alert(a);
})();

console.log(a)

//12 will be alerted



//Q7 
var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();

//12 will be alerted



//Q8
var globalVar = "xyz";
(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);

/*outerArg = 123
innerArg = 456
outerVar = a
innerVar = b
globalVar = xyz*/
