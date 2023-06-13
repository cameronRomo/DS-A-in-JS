// Compare two strings and determine if the second string is an anagram (word, phrase,
// or name formed by rearranging the letters of another).
function validAnagram(str1, str2) {
  // Return false if the length of strings differs
  if (str1.length !== str2.length) return false;
  // create frequency counter obj(s) to track occurrence of characters
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  // if key does not exist, create it, otherwise add 1 (for both inputs)
  for (let val of str1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    console.log(frequencyCounter1);
  }

  for (let val of str2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  // compare objs, if the number of occurrences is off, return false
  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) return false;
    if (frequencyCounter2[key] !== frequencyCounter1[key]) return false;
  }
  console.log(frequencyCounter2);
  // return true if anagram, or false otherwise
  return true;
}

validAnagram("anagrams", "nagarams");
