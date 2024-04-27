//Lesson05
const numbersArray = ["28", "55", "123", "288", "499", "2000", "7456"];

const filterNumbers = function (arr) {
  let filteredArr = [];

  arr.filter((num) => {
    if (num.startsWith("2") || num.startsWith("4")) {
      filteredArr.push(num);
    }
  });

  filteredArr.forEach((item) => {
    console.log(item);
  });
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

filterNumbers(numbersArray);
getPrime(1, 100);
