//Q1 Find the smaller angle

var Minimal_Angle = (h, m) => {
  h = h % 12;
  hh = (h * 360) / 12 + (m * 360) / (12 * 60);
  mm = (m * 360) / 60;
  var angle = Math.abs(hh - mm);
  if (angle > 180) {
    angle = 360 - angle;
  }
  return angle; 
};

// Q2 Check whether the year is Leap year or not.

var Check_Leap = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return "Leap Year";
  } else {
    return "Non Leap Year";
  }
};

//Q3 Perfect Number Check.

var Perfect_Check = (n) => {
  var div;
  if (n % div === 0 && n % n !== 0) {
    return "YES";
  } else return "NO";
};

//Q4  Reverse The Number

var Reverse_Number = (n) => {
  let rev = 0;
  let lastdig;

  while (n !== 0) {
    lastdig = n % 10;
    rev = rev * 10 + lastdig;
    n = Math.floor(n / 10);
  }
  return rev;
};

//Q5 Substring Check.

var Substring_Check = (S1, S2) => {
  let result = S1.includes(S2);
  if (result === true) {
    return "YES";
  } else {
    return "NO";
  }
};
