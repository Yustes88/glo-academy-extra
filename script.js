const num = 266219;

const numArray = num.toString().split("");

const multipliedNumResult = numArray.reduce((a, b) => a * Number(b));

const powerResult = multipliedNumResult ** 3;

const twoFirstSliceDigits = powerResult.toString().substring(0, 2);

console.log(`Произведение цифр числа ${num}: ${multipliedNumResult}`);

console.log(
  `Первые две цифры числа ${powerResult}: ${Number(twoFirstSliceDigits)}`
);
