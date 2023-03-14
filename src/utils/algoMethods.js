//just the first letter in the string

export const makeFirstLetterCapital = (text) => {
  const term = text.toLowerCase().trim();
  return term.charAt(0).toUpperCase() + term.slice(1);
};

//all the first letters in the string

export const makeEveryFirstLetterCapital = (text) => {
  const term = text.toLowerCase().trim();
  const splitText = term.split(" ");

  for (let i = 0; i < splitText.length; i++) {
    splitText[i] = splitText[i].charAt(0).toUpperCase() + splitText[i].slice(1);
  }

  return splitText.join(" ");
};

//gives a number between min and max

export const randomNumBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

generateUniqId = (array, min, max) => {
  //check array is full
  if (array.length >= max - min)
    throw new Error("you reached max items in the array!");
  if (min >= max) throw new Error("min number must be lower then max number");

  const randomNumber = randomNumBetween(min, max);
  const item = array.findIndex((item) => item._id === randomNumber);
  if (item === -1) return randomNumber + new Date().toLocaleTimeString();
  this.generateId(array);
};
