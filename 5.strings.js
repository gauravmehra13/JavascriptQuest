//Q1 Count Characters


const countCharacters = (S) => {
  var countA = 0;
  var countD = 0;
  var B = [];
  for (let i = 0; i < S.length; i++) {

    if (S[i] == 'A')
      countA++;

    else if (S[i] == 'D')
      countD++;
  }

  B[0] = countA;
  B[1] = countD;

  return B;
};


//Q2 Count the HeadsSS

//To write a code that finds out the count of a
//characters that occur more than once in the string.

var Count_Occ = (s) => {
  let freq=new Array(26)

for(let i=0;i<26;i++){
freq[i]=0
}


for(let j=0 ; j<s.length; j++ ) {          
  var index=s[j].charCodeAt()-97   
  freq[index]+=1  }

let resStr=""
let ch=""

  for(let k=0;k<=25;k++)
  {

  if(freq[k]>1){
    ch=String.fromCharCode(k+97)
    resStr +=ch;
    resStr +=freq[k];
   
}
 

  } console.log(resStr)

};



//Q3 Count the Vowels


var Count_Vowels = (S) => {
  var ch;
  var count = 0;
  for (let i = 0; i < S.length; i++) {
    ch = S[i];
    ch = ch.toUpperCase();

    if (ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U')
      count++;
  }

  return count;
};


  /* 
  let s= "Acer Predator Helios"
  let count=0;
  s=s.toLowerCase()
  let ch=s[i]
  for ( let i=0; i< s.length ; i++ ){
    if( ch == 'a' ||  ch == 'e' ||  ch == 'i' ||  ch == 'o' ||  ch == 'u' )
    count++
  }  

  return count;


*/


//Q4 Concatenate the Strings


var Concatenate_Strings = (S1, S2) => {
  let S3 = S1.concat(S2);
  return S3;
};



//Q5 Find Length

const findLength = (S) => {
  return S.length;
};



//Q6 Find the Winner


var countA = 0;
var countD = 0;
var B = [];
for (let i = 0; i < S.length; i++) {

  if (S[i] == 'A')
    countA++;

  else if (S[i] == 'D')
    countD++;


}
if (countD > countA)
  return "Danish";

else if (countA > countD)
  return "Aditya";

else
  return "Draw";



//Q7 Join Strings


const joinStrings = (S, P) => {
  let S3 = S.concat(P);
  return S3;
};

//Q8 Plaindrome Check


var Palin_Check = (str) => {
  let i = 0, j = str.length - 1;
  let palindrome = true;

  while (i < j) {
    if (str[i] != str[j]) {
      palindrome = false;
      break;
    }

    i++; j--;

  }
  if (palindrome === true) {
    return "True";
  }
  else {
    return "False";
  }

};



//Q9 Reverse the String


var Reverse_String = (str) => {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
};


//Q10 Match the Strings


var String_Match = (S1, S2) => {
  const result = S1.toUpperCase() === S2.toUpperCase();

  if (result) {
    return ('YES');
  } else {
    return ('NO');
  }

};



//Q11 String Replace


var Replace = (S, pattern, text) => {
  let replace = S.replace(pattern, text);

  return replace;
};



//Q12 Split the String


var Split_the_string = (S) => {

  return S.split(" ");
};



//Q13 Count the Vowels and Consonants


var Count_Vowels = (S) => {
  var ch;
  var count = 0;
  for (let i = 0; i < S.length; i++) {
    ch = S[i];
    ch = ch.toUpperCase();

    if (ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U')
      count++;
  }

  return count;
};
var Count_Consonants = (S) => {
  var vh;
  var count = 0;
  for (let i = 0; i < S.length; i++) {
    ch = S[i];
    ch = ch.toUpperCase();

    if (ch != 'A' && ch != 'E' && ch != 'I' && ch != 'O' && ch != 'U')
      count++;
  }

  return count;
};
