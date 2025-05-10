/* Q1  You are given a string (STR) of length N, consisting of only the lower case English alphabet.
        Your task is to remove all the duplicate occurrences of characters in the string.
        */

let str = "abcadeecfb";
let N = str.length;
let s = new Set(str);
let str2 = [...s].sort().join("");
console.log(str2);

/* Q2.You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)*/

let str1 = "abcadeecfb";
let N1 = str1.length;
let arr = str1.split("");
let count = new Map();
for (let i = 0; i < arr.length; i++) {
  if (count.has(arr[i]) == true) {
    let val = count.get(arr[i]);
    count.set(arr[i], val + 1);
  } else {
    count.set(arr[i], 1);
  }
}
for (let i of count) {
  console.log(i[0] + "=" + i[1]);
}
