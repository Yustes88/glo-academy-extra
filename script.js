//Lesson04
const message1 = " This is a short message";
const message2 = "This is a long message where length is more than 30";

const displayMessage = function (str) {
  if (typeof str !== "string") {
    alert(`The type of ${str} is not a string`);
    return;
  }

  const trimmedString = str.trim();

  if (trimmedString.length > 30) {
    return `${trimmedString.slice(0, 30)}...`;
  }

  return trimmedString;
};

console.log(displayMessage(message1));
console.log(displayMessage(message2));
