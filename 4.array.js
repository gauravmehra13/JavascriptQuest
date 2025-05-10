//Q1 Find the Product.

const Find_Prod = (array, N) => {
  let product = 1;
  for (let i = 0; i < N; i++) {
    product = product * array[i];
  }
  return product;
};

//Q2 Find the Sum.

const Find_Sum = (array, N) => {
  let sum = 0;
  for (let i = 0; i < N; i++) {
    sum = sum + array[i];
  }
  return sum;
};

//Q3 Count Occurrences.

const findCount = (N, K, Arr) => {
  let count = 0;
  for (let i = 0; i < N; i++) {
    if (Arr[i] === K) count = count + 1;
  }
  return count;
};

//Q4 Even Odd

const findEvenOdd = (N, Arr) => {
  let B = [];
  let sumEven = 0,
    sumOdd = 0;
  for (let i = 0; i < N; i++) {
    if (Arr[i] % 2 === 0) {
      sumEven += Arr[i];
    } else {
      sumOdd += Arr[i];
    }
  }
  B.push(sumEven);
  B.push(sumOdd);
  return B;
};

//Q5 Find whether the number is present or not

const Find_Num = (arr, n, m) => {
  let flag = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] === m) flag = 1;
  }

  if (flag === 1) return "YES";
  else return "NO";
};

//Q6 Higher Age

const highAge = (N, arr) => {
  let arr2 = [];
  for (let i = 0; i < N; i++) {
    if (arr[i] >= 18) {
      arr2.push(arr[i]);
    }
  }
  return arr2;
};

//Q7 Increment the Array Elements

const Inc_Arr = (array, N) => {
  for (let i = 0; i < N; i++) {
    array[i] = array[i] + 1;
  }
};

//Q8 Pass or Fail

const isAllPass = (N, Arr) => {
  let flag = 0;

  for (let i = 0; i < N; i++) {
    if (Arr[i] < 32) {
      flag = 1;
      break;
    }
  }
  if (flag === 0) return "YES";
  else return "NO";
};

//Q9 Unique Color Shirt

function Unique_Shirts(arr, N) {
  let unique = arr.filter(
    (value) => arr.indexOf(value) === arr.lastIndexOf(value)
  );
  return unique.length;
}

//Q10 Min And Max

function arrayMin(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

function arrayMax(arr) {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

//Q11 Birthday Game

function Birthday_Game(arr, D, M) {
  let counter = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let subArray = arr.slice(i, i + M);
    if (subArray.length === M) {
      let sum = subArray.reduce((a, b) => a + b, 0);
      if (sum === D) {
        counter += 1;
      }
    }
  }
  return counter;
}

//Q12 Reverse Array

function reverseArr(arr) {
  let reversed = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }

  return reversed;
}

console.log(reverseArr([3, 2, 1]));

//Q13 Empty an array

function empty(arr) {
  while (arr.length) {
    arr.length = arr.length - 1;
  }

  return arr;
}

console.log(max(arr));

//Q14 Swap variables

function swapVar(arr) {
  let x = arr[0];
  arr[0] = arr[1];
  arr[1] = x;

  return arr;
}

console.log(swapVar([1, 3]));

//Q14 Remove the first and last elements of the array and update the original

function removeFirstAndLastWithLoop(arr) {
  if (arr.length < 2) {
    throw new Error("Array must have at least two elements");
  }

  let first = arr[0];
  let last = arr[arr.length - 1];
  let newArr = [];

  for (let i = 1; i < arr.length - 1; i++) {
    newArr.push(arr[i]);
  }

  // Update the original array to reflect removed elements
  arr.length = 0;
  for (let val of newArr) {
    arr.push(val);
  }

  return { first, last };
}

// Example usage:
let array = [10, 20, 30, 40, 50];
const result = removeFirstAndLastWithLoop(array);

console.log(result); // { first: 10, last: 50 }
console.log(array); // [20, 30, 40]

//Q15 Intersection in array

function intersect(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const intersect = [];
  for (let i of set1) {
    if (set2.has(i)) {
      intersect.push(i);
    }
  }

  return intersect;
}

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 6, 8, 2];
console.log(intersect(arr1, arr2));

//Q17 Binary Sort -> sort array in increasing order

function binarysort(arr, arr2) {
  let swapped = true;

  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

console.log(binarysort(arr));

//Q18 Remove duplicates from the array and return it in sorted order
function removeDuplicates(arr) {
  let seen = new Set();
  let duplicates = [];

  for (let i of arr) {
    if (!seen.has(i)) {
      seen.add(i);
    } else {
      duplicates.push(i);
    }
  }
  console.log(duplicates);
  let sortedSeen = Array.from(seen).sort();
  return [...sortedSeen];
}
console.log(removeDuplicates(arr));

//Q19 Flatten an array

function flatten(arr) {
  let flattenedArr = [];
  let stack = [...arr];

  while (stack.length) {
    let last = arr.pop();
    if (Array.isArray(last)) {
      stack.push(...last);
    } else flattenedArr.push(last);
  }
  return flattenedArr.reverse(); //reverse because the stack is LIFO
}

console.log(flatten([1, 4, 3, [2, [2, 4], 3], 5]));

//Q20 Print the fibbonacci Series till a given number

function fibonnacci(num) {
  const series = [0, 1];

  for (let i = 2; i <= num; i++) {
    const next = series[i - 1] + series[i - 2];
    series.push(next);
  }

  return series;
}

console.log(fibonnacci(10));

//Q21 Find 2 sum => 2 elements that are summing to be the target

function pairsum(arr, target) {
  let seen = new Set();
  let pair = [];
  let found = false;
  for (let i of arr) {
    let compliment = target - i;
    if (seen.has(compliment)) {
      pair.push(compliment, i);
      found = true;
    }
    seen.add(i);
  }

  if (found) {
    return pair;
  } else return "NAH";
}

console.log(pairsum([10, 15, 3, 7], 17));

// Q22 To find a subarray (contiguous elements) in an unsorted array that adds up to a target sum — and support positive and negative numbers

function findSubarrayWithSum(arr, target) {
  const prefixSumMap = new Map(); // prefixSum -> index
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    if (currentSum === target) {
      return arr.slice(0, i + 1); // from start to i
    }

    if (prefixSumMap.has(currentSum - target)) {
      const startIndex = prefixSumMap.get(currentSum - target) + 1;
      return arr.slice(startIndex, i + 1);
    }

    // Store prefix sum only if not already seen (to get earliest subarray)
    if (!prefixSumMap.has(currentSum)) {
      prefixSumMap.set(currentSum, i);
    }
  }

  return null; // No subarray found
}

// Q23 Remove all occurences of a particular element from an array

function removeElement(nums, val) {
  let i = 0;
  let n = nums.length;

  while (i < n) {
    if (nums[i] === val) {
      nums[i] = nums[n - 1]; // Replace with last element
      n--; // Reduce size (ignore last element in next iteration)
    } else {
      i++;
    }
  }
  return n; // New length of the array (excluding `val`)
}
const nums = [3, 2, 2, 3, 4];
const val = 3;

const newLength = removeElement(nums, val);
console.log(newLength); // Output: 3
console.log(nums.slice(0, newLength)); // Output: [4, 2, 2] or similar (order may vary)

// Q24 There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].
// You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station.
// You begin the journey with an empty tank at one of the gas stations.
// Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction,
//  otherwise return -1. If there exists a solution, it is guaranteed to be unique
function canCompleteCircuit(gas, cost) {
  let totalTank = 0;
  let currentTank = 0;
  let startIndex = 0;

  for (let i = 0; i < gas.length; i++) {
    const diff = gas[i] - cost[i];
    totalTank += diff;
    currentTank += diff;

    if (currentTank < 0) {
      startIndex += 1;
      currentTank = 0;
    }
  }

  return totalTank >= 0 ? startIndex : -1;
}

const gas = [1, 2, 3, 4, 5];
const cost = [3, 4, 5, 1, 2];

console.log(canCompleteCircuit(gas, cost)); // Output: 3
