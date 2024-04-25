//Lesson05
const numbersArray = ["28", "55", "123", "288", "499", "2000", "7456"];

const filterNumbers1 = function (arr) {
  arr.map((num) => {
    if (num.startsWith("2") || num.startsWith("4")) {
      console.log(num);
    }
  });
};

//OR
const filterNumbers2 = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].startsWith("2") || arr[i].startsWith("4")) {
      console.log(arr[i]);
    }
  }
};

//OR
const filterNumbers3 = function (arr) {
  let filteredArr = [];

  arr.filter((num) => {
    if (num.startsWith("2") || num.startsWith("4")) {
      filteredArr.push(num);
    }
  });

  console.log(filteredArr.join(" "));
};

const isPrime = function (num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return num > 1;
};

const getPrime = function (start, end) {
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      console.log(`Делители числа ${i}: 1 и ${i}`);
    }
  }
};

filterNumbers1(numbersArray);
filterNumbers2(numbersArray);
filterNumbers3(numbersArray);
getPrime(1, 100);
