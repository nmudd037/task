/* 
Task2: Suppose we have a large array of ASCII characters. 
Write an efficient function to find the first nonrepeated character in the array. For instance, 
the first nonrepeated character in ['t', 'o', 't', 'a', 'l']is 'o' 
and the first nonrepeated character in ['t', 'e', 'e', 't', 'e', 'r'] is 'r'. 
Discuss the efficiency of your algorithm.  
*/

const firstNonRepeatedChar = (strArr) => {
  // Object to keep track of each character and its corresponding count value (no. of occurrences) in the string array.
  const charCountObj = {};

  // Storing the count values for each character in the object
  strArr.forEach((char) => {
    if (charCountObj[char]) {
      charCountObj[char] += 1;
    } else {
      charCountObj[char] = 1;
    }
  });

  // Returning the first character in the object whose count is equal to 1
  for (const char of strArr) {
    if (charCountObj[char] === 1) {
      return char;
    }
  }

  return "No non-repeating character in the array.";
};

console.log(firstNonRepeatedChar(["t", "o", "t", "a", "l"])); // o
console.log(firstNonRepeatedChar(["t", "e", "e", "t", "e", "r"])); // r

/* 
Discusiion on ALgorithm for Task 2:  
1. Normally we could solve the problem by using a pair of for loops, 
we can iterate over the string in a nested fashion to determine if a character has been repeated.
Problems with the nested for-loop:
- The nested for loop algorithm has a polynomial time complexity of O(n^2).

2. To avoid having a nested loop, we can keep track of how many times each value exists in the string using a object — 
where the character is the key and the count is the value.
Once we have our counts, the object becomes a reference as we check for the first character with only one occurrence:
The time complexity is reduced to O(n), where n is the string array length.  
*/
