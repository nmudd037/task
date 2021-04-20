/* 
Task1: Write a function that adds all values in an array.
*/
const arrSum = (arr) => arr.reduce((acc, val) => acc + val, 0);

const exArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arrSum(exArray); // 45
