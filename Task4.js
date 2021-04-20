/* 
Task4: Given a string containing just the characters '(', ')', '{', '}', '[' and ']', 
write a function called isValidto determine if the input string is valid.
The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not. 
*/
const isValidto = (strn) => {
  const bracketMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  if (strn.length < 2) return false; // If its a empty string or a single character

  let opnBrackArr = []; // Array to keep track of open brackets.

  for (let i = 0; i < strn.length; i++) {
    // If its a open bracket, add it to the array
    if (bracketMap[strn[i]]) opnBrackArr.push(strn[i]);
    else {
      // Check for last corresponding open bracket
      const e = opnBrackArr.pop();
      if (!e || bracketMap[e] !== strn[i]) return false;
    }
  }

  return !opnBrackArr.length;
};

console.log(isValidto("{}[]()")); //true
console.log(isValidto("{([})]")); //false
