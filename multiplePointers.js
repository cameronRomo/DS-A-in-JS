// Creating pointers or values that correspond to an index or position and move towards
// the beginning end or middle based on a certain condition.

// Implement a function called countUniqueValues, which accepts a sorted array,
// and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let first = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[first] !== arr[j]) {
      first++;
      arr[first] = arr[j];
    }
  }
  return first + 1;
}

countUniqueValues([1, 1, 2, 3, 3, 4, 4, 5, 6]);
