function calc(arr = []) {
  // Calculate the sum of array by reduce
  let sum = arr.reduce((acc, val) => acc + val);

  // Calculate the Average of array by reduce
  let avg = arr.reduce((acc, val) => acc + val) / arr.length;

  return `Sum = ${sum}
Average = ${avg}`;
}

console.log(calc([1, 2, 3, 4, 5]));

function uniqueValues(arr = []) {
  return [...new Set(arr)];
}

console.log(
  uniqueValues(["Mohammed", "Qashqesh", "Mohammed", "A", "A", "Sara", 1, 1, 2])
);
