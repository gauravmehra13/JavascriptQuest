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
    if (Arr[i] === K) 
    count = count + 1;
  }
  return count;
};

//Q4 Even Odd

const findEvenOdd = (N, Arr) => {
  let B = [];
  let sumEven = 0,sumOdd = 0;
  for (let i = 0; i < N; i++) {
    if (Arr[i] % 2 === 0) {
      sumEven += Arr[i];
    } 
    else {
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

const highAge = (N, arr) => 
{
  let arr2 = [];
  for(let i = 0; i < N; i++){
    if(arr[i] >= 18){
      arr2.push(arr[i]);
    }
  }
  return arr2;
};

//Q7 Increment the Array Elements

const Inc_Arr = (array, N) => {
  for (let i = 0; i < N; i++)
   {
    array[i] = array[i] + 1;
  }
};

//Q8 Pass or Fail

const isAllPass = (N, Arr) => {
  let flag = 0;

  for (let i = 0; i < N; i++)
   {
    if (Arr[i] < 32) {
      flag = 1;
      break;
    }
  }
  if (flag === 0) return "YES";
  else return "NO";
};

//Q9 Unique Color Shirt

function Unique_Shirts (arr,N) {
  let unique = arr.filter((value) =>
  arr.indexOf(value) === arr.lastIndexOf(value));
      return(unique.length);

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
    if (arr[i] > max)
     max = arr[i];
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
