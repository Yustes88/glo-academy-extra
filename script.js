// const num = 266219;

// const numArray = num.toString().split("");

// const multipliedNumResult = numArray.reduce((a, b) => a * Number(b));

// const powerResult = multipliedNumResult ** 3;

// const twoFirstSliceDigits = powerResult.toString().substring(0, 2);

// console.log(`Произведение цифр числа ${num}: ${multipliedNumResult}`);

// console.log(
//   `Первые две цифры числа ${powerResult}: ${Number(twoFirstSliceDigits)}`
// );

//Lesson03

//task 1
let lang = "en";

const daysOfWeekRu = "Пон, Вт, Ср, Чт, Пт, Сб, Вс";
const daysOfWeekEn = "Mon, Tue, Wed, Th, Fr, Sat, Sun";
const errorMessage = "Дни недели на данном языке отсутсвуют";

// if statement
if (lang === "ru") {
  console.log(daysOfWeekRu);
} else if (lang === "en") {
  console.log(daysOfWeekEn);
} else {
  console.log(errorMessage);
}

//switch statement
switch (lang) {
  case "en":
    console.log(daysOfWeekEn);
    break;
  case "ru":
    console.log(daysOfWeekRu);
    break;
  default:
    console.log(errorMessage);
}

//многомерный массив
const daysOfWeek = {
  ru: [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ],
  en: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
};

console.log(daysOfWeek[lang]);

//task 2
const namePerson = "Юля";

console.log(
  namePerson === "Артем"
    ? "директор"
    : namePerson === "Александр"
    ? "преподаватель"
    : "студент"
);
