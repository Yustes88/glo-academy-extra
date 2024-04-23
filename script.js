//Lesson03

//task 1
let lang = "ru";

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
const daysOfWeek = [
  [
    "ru",
    [
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
      "Воскресенье",
    ],
  ],
  [
    "en",
    [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  ],
];

const selectedLanguage = daysOfWeek.find((item) => item[0] === lang);
console.log(selectedLanguage[1]);

//task 2
const namePerson = "Юля";

console.log(
  namePerson === "Артем"
    ? "директор"
    : namePerson === "Александр"
    ? "преподаватель"
    : "студент"
);
