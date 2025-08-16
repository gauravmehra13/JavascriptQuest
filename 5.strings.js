//Q1 Count Characters

const countCharacters = (S) => {
  var countA = 0;
  var countD = 0;
  var B = [];
  for (let i = 0; i < S.length; i++) {
    if (S[i] == "A") countA++;
    else if (S[i] == "D") countD++;
  }

  B[0] = countA;
  B[1] = countD;

  return B;
};

//Q2 Count the HeadsSS

//To write a code that finds out the count of a
//characters that occur more than once in the string.

var Count_Occ = (s) => {
  let freq = new Array(26);

  for (let i = 0; i < 26; i++) {
    freq[i] = 0;
  }

  for (let j = 0; j < s.length; j++) {
    var index = s[j].charCodeAt() - 97;
    freq[index] += 1;
  }

  let resStr = "";
  let ch = "";

  for (let k = 0; k <= 25; k++) {
    if (freq[k] > 1) {
      ch = String.fromCharCode(k + 97);
      resStr += ch;
      resStr += freq[k];
    }
  }
  console.log(resStr);
};

//Q3 Count the Vowels

var Count_Vowels = (S) => {
  var ch;
  var count = 0;
  for (let i = 0; i < S.length; i++) {
    ch = S[i];
    ch = ch.toUpperCase();

    if (ch == "A" || ch == "E" || ch == "I" || ch == "O" || ch == "U") count++;
  }

  return count;
};

/* const Count_Vowels = (S) => {
  let ch;
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < S.length; i++) {
    ch = S[i];
    ch = ch.toLowerCase();

    if (vowels.includes(ch)) count++;
  }

  return count;
}; */

console.log(Count_Vowels("acer"));

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
  if (S[i] == "A") countA++;
  else if (S[i] == "D") countD++;
}
if (countD > countA) return "Danish";
else if (countA > countD) return "Aditya";
else return "Draw";

//Q8 Plaindrome Check

var Palin_Check = (str) => {
  let i = 0,
    j = str.length - 1;
  let palindrome = true;

  while (i < j) {
    if (str[i] != str[j]) {
      palindrome = false;
      break;
    }

    i++;
    j--;
  }
  if (palindrome === true) {
    return "True";
  } else {
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
    return "YES";
  } else {
    return "NO";
  }
};

//Q11 String Replace

var Replace = (S, pattern, text) => {
  let replace = S.replace(pattern, text);

  return replace;
};

//Q12 Split the String to array

var Split_the_string = (S) => {
  return S.split(" ");
};

// Better questions :

//1 palindrome with or without spaced words

function palindromeCheck(input) {
  let str = input.toLowerCase();
  // const str2 = str.replace(/\W/g, "")
  // const str2 = str.replace(/\s/g, "")

  let str2 = str.split(" ").join("").toString();

  let palindrome = true;
  let i = 0;
  let j = str2.length - 1;

  while (i < j) {
    if (str2[i] !== str2[j]) {
      palindrome = false;
    }
    i++;
    j--;
  }

  if (palindrome) return "TRUE";
  else return "FALSE";
}

let input = "A man a plan a canal Panama";
console.log(palindromeCheck(input));

//2 Check for anagram

function anagramCheck(str1, str2) {
  function clean(str) {
    return str.split("").sort().join("");
  }

  if (clean(str1) === clean(str2)) {
    return "Yes it is anagram";
  } else return "No";
}

console.log(anagramCheck(str1, str2));

//3 Duplicates check with Sets

function duplicatesCheckwithSet(str) {
  let seen = new Set();
  let duplicates = new Set();

  for (let char of str) {
    if (!seen.has(char)) {
      seen.add(char);
    } else duplicates.add(char);
  }

  return duplicates;
}

console.log(duplicatesCheckwithSet(str));

//4 Duplicates Check without Sets

function duplicatesCheck(str) {
  let count = {};
  let duplicates = [];
  let duplicatesWithCount = {};

  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char in count) {
    if (count[char] > 1) {
      duplicates.push(char);
      duplicatesWithCount[char] = count[char];
    }
  }

  // return duplicates
  return duplicatesWithCount;
}

console.log(duplicatesCheck(str));

//5 Duplicates with their counts in string => 3a2b

function duplicatesCheck(str) {
  let count = {};
  let duplicatesWithCount = "";

  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }

  let sortedCount = Object.keys(count);
  for (let char of sortedCount) {
    duplicatesWithCount += count[char] + char;
  }

  return duplicatesWithCount;
}

console.log(duplicatesCheck(str));

//6 Most occuring characters , even with Tie
function mostOccuring(str) {
  let count = {};
  let mostOccuring = [];
  let maxCount = 0;

  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
    maxCount = Math.max(count[char], maxCount);
  }

  let sortedCount = Object.keys(count);
  for (let char of sortedCount) {
    if (count[char] === maxCount) mostOccuring.push(char);
  }

  return mostOccuring;
}

console.log(mostOccuring(str));

//7 capitalize the first letter of every word

function captializedWords(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(captializedWords(str));

//8 kebab-case to camelCase

function camelCase(str) {
  let result = "";
  let x = str
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join("");
  result += x[0].toLowerCase() + x.slice(1);
  return result;
}

console.log(camelCase("react-component.jsx"));

//9 Convert to alphanumeric
function alphanumeric(str) {
  let str1 = str.toLowerCase();
  let result = [];
  for (let char of str1) {
    let code = char.charCodeAt(0);

    if (code >= 97 && code <= 122) {
      result.push(code - 96);
    }
  }

  return result;
}

console.log(alphanumeric("Pavan"));

//10 count of Pattern of a substring
function patternCount(str, pattern) {
  let count = 0;

  for (let i = 0; i <= str.length - pattern.length; i++) {
    let patternfound = str.substr(i, pattern.length);

    if (patternfound === pattern) count++;
  }
  return count;
}

console.log(patternCount("manmanman", "man"));

// Q11 Check if a string can be created from letters of another string given that each letter from second string can be used once
function strCheck(str1, str2) {
  let seen = {};
  for (let char of str2) {
    seen[char] = (seen[char] || 0) + 1;
  }
  for (let char of str1) {
    if (!seen[char]) {
      return false;
    }
    seen[char]--;
  }
  return true;
}

console.log(strCheck("mat", "batman"));

//Q12 Reverse the words of a sentence
function reverseWords(str) {
  let arr = str.split(" ");
  let reversedarr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversedarr.push(arr[i]);
  }

  return reversedarr.join(" ");
}

console.log(reverseWords("Namaste Javascript"));

//Q13 Concat and return the letters of a string if they are printed in zig zag order for n rows

function convertZigzag(s, numRows) {
  if (numRows <= 1 || s.length <= numRows) return s;

  let rows = Array.from({ length: numRows }, () => "");
  let currentRow = 0;
  let goingDown = false;

  for (let char of s) {
    rows[currentRow] += char;

    if (currentRow === 0 || currentRow === numRows - 1) {
      goingDown = !goingDown;
    }

    currentRow += goingDown ? 1 : -1;
  }

  return rows.join("");
}

console.log(convertZigzag("PAYPALISHIRING", 3));

//Q14 For a set of paranthesis, check if they having appropriate opening and closing tags.

function validParanthesis(s) {
    const stack = [];
    const map = new Map();
    
    // Mapping closing brackets to opening ones
    map.set(')', '(');
    map.set('}', '{');
    map.set(']', '[');

    for (let c of s) {
        if (c === '(' || c === '{' || c === '[') {
            // Push opening brackets to stack
            stack.push(c);
        } else if (map.has(c)) {
            // On encountering closing bracket, check the top of the stack
            if (stack.length === 0 || map.get(c) !== stack.pop()) {
                return false;  // If stack is empty or mismatch occurs, return false
            }
        }
    }

    return stack.length === 0;  // If stack is empty, all parentheses are balanced
}


console.log(validParanthesis(input));  // Output: true

//Q15 Check the string containing roman numerals and convert it to regular integers

function romanToInt  (s)  {
  const romanMap = { I:1, V:5, X:10, L:50, C:100, D:500, M:1000 };
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    let curr = romanMap[s[i]];
    let next = romanMap[s[i + 1]];

    if (next > curr) {
      total += next - curr;
      i++;
    } else {
      total += curr;
    }
  }

 return total;
}


console.log(romanToInt("XV"))
