export function analyzeArray(array) {
  const obj = {};

  const averageOfArray = (array.reduce((total, current) => {
    return total + current;
  })) / array.length;

  obj.average = averageOfArray;

  let minNumber;
  let maxNumber;

  for (const number of array) {
    if (minNumber === undefined) minNumber = number;
    else if (number < minNumber) minNumber = number;
    if (maxNumber === undefined) maxNumber = number;
    else if (number > maxNumber) maxNumber = number;
  }

  obj.min = minNumber;
  obj.max = maxNumber;

  obj.length = array.length;

  return obj;
}
