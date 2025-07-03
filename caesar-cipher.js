export function caesarCipher(string, shift) {
  const adjustedShift = shift % 26;

  if (adjustedShift === 0) {
    return string;
  }

  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  function findCipherLetter(inputLetter) {
    const index = alphabet.indexOf(inputLetter.toLowerCase());
    const newIndex = (index + adjustedShift) % 26;
    if (alphabet.includes(inputLetter)) return alphabet.at(newIndex);
    else return alphabet.at(newIndex).toUpperCase();
  }

  const inputStringArray = string.split("");
  const newStringArray = [];

  const letterRegEx = /[a-zA-Z]/;

  for (const item of inputStringArray) {
    if (letterRegEx.test(item)) {
      const cipherLetter = findCipherLetter(item);
      newStringArray.push(cipherLetter);
    } else newStringArray.push(item);
  }

  return newStringArray.join("");
}
