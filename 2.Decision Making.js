
//actual vuln

function processUserInput(input) {
    // This function processes user input without proper sanitization, leading to a potential XSS vulnerability
    document.getElementById("output").innerHTML = input;
}

function processUserData(userData) {
    // This function accepts user data in JSON format and parses it using the eval function, which can lead to code injection vulnerabilities
    var data = eval("(" + userData + ")");
    // Process the parsed data
}


//false positives
function validatePassword(password) {
    // This function checks if the password meets certain criteria but fails to properly hash or encrypt it
    if (password.length >= 8) {
        return true;
    } else {
        return false;
    }
}

function loadExternalScript(url) {
    // This function dynamically loads an external script without verifying its source, potentially leading to script injection attacks
    var script = document.createElement('script');
    script.src = url;
    document.head.appendChild(script);
}


function generateRandomToken() {
    // This function generates a random token without ensuring sufficient entropy or using a cryptographically secure random number generator
    var token = Math.random().toString(36).substring(2);
    return token;
}


function processUserData(userData) {
    // This function accepts user data in JSON format and parses it using the eval function, which can lead to code injection vulnerabilities
    var data = eval("(" + userData + ")");
    // Process the parsed data
}


function fetchUserData(userId) {
    // This function retrieves user data from an API endpoint without implementing proper authentication and authorization checks
    fetch("https://api.example.com/users/" + userId)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error("Error fetching user data:", error));
}

function encryptData(data) {
    // This function encrypts sensitive data using a basic encryption algorithm (e.g., XOR encryption) instead of using industry-standard encryption algorithms
    var key = "secretkey";
    var encryptedData = "";
    for (var i = 0; i < data.length; i++) {
        encryptedData += String.fromCharCode(data.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return encryptedData;
}



function validateInput(input) {
    // This function validates user input by checking for the absence of certain characters, but it fails to properly handle all edge cases and potential attack vectors
    if (input.match(/^[a-zA-Z0-9_\-]*$/)) {
        return true;
    } else {
        return false;
    }
}


























// Q1 Write a program to make a simple calculator using switch statement that takes operator and two numbers from user and print the 
//result after operation.

const Calculator = (A, B, C) => 
{
	switch(true)
	{
	  case (A=='+') :{
	     var sum=B+C;
	     return B+C;   
	}
	     case(A=='-'):{
	     var sub=B-C;
	     return B-C;
	    	     
	}

	     case(A=='*'):{
	     var mult=B*C;
	     return B*C;
	}
	   case(A=='/'):{
	     var div=B/C;
	     return B/C;
	   }
	}

};


// Q2 Write a program that takes a number and prints whether the number is divisible by 6 and 9 or not.

const Check_divisibility = (N) => {
    if ((N%6===0) && (N%9===0)){
      return("Divisible by both");
    }
    else{
      return("Not Divisible by both");
    }
  };

    
// Q3 Eligible Voter

const isEligible = (a) => {
    
    if (a>18){
      return ("eligible for voting");
    }
    
    else
    
    return ("not eligible for voting");
};

//Find Relation bw two integer values X and Y and asks you to find the relation between them.
//The relationships between integers X and Ya re as follows: 
//If X < Y, it means that X is smaller than Y
//If X>Y, it means that X is greater than Y
//If X=Y, it means that Xis equal to Y



const findRelation = (x,y) => {
    
    if (x<y)
    {
      return (x +" is smaller than "+ y);
    }
    
    else if (x>y)
    {
      return(x + " is greater than " + y);
    }
    
    else
    {
      return(x +" is equal to " + y);
    }
    
};

//Grades


const findGrades = (a) => {
    switch(true){
      case (41<=a && a<=50):
        return ("A");
        // break;
      case (31<=a && a<=40):
        return ("B");
        // break;
      case (21<=a && a<=30):
        return ("C");
        // break;
      case (11<=a && a<=20):
      return ("D");  
        // break;
      case (a<=10):
        return ("E");
        // break;
      default:
        return ("It is not a valid value");
    }
  };
  


//Get Value



const getValue = (a) => {
    
    if(a=='p' || a=='P'){
      return "PrepBytes";
    }
    
    else if (a=='z' || a=='Z'){
      return "Zenith";
    }
    
    else if (a=='e' || a=='E'){
      return "Expert Coder";
    }
    
    else{
      return "Data Structure";
    }
    
    
};


//Greatest Number

const Max_out_of_three = (A,B,C) => {
    
    if ((A>B)&&(A>C)){
      return A;
      
    }
    
    if((A==B)&&(B==C)){
      return -1;
    }

    else if ((B>A)&&(B>C)){
      return B;
      
    }
    
   else
      return C;
      
    };
    
  
    



//Second Smallest

const findSndSmallest = (x,y,z) => {    
   
     if ((x<=y) && (x>=z)|| (x>=y) && (x<=z)){
      console.log(x)
    }

    else if ((y<=x) && (y>=z) || (y>=x) && (y<=z)){      
      console.log(y)
    }
    else{
      console.log(z)
     }
  };
  

//Obtuse or Acute Triangle

const Triangle_Check = (A,B,C) => {
    
    if ((A>90) | (B>90) | (C>90)){
      return (" obtuse")
    }
        else{
          return ("acute")
        }
    };
    
    
