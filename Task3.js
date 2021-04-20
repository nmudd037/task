/*
Task3: You’re given an error log file that consists of two types of errors. Each line on the log file shows one error. 
Every line is a space-delimited string. All lines begin with an alphanumeric id. After the id, the line consists of either:
•	A list of words using only English letters (error type 1)
•	A list of only integers (error type 2)

You have to reorder the data such that all of the lines with words (error type 1) are at the top of the log file. 
The lines with words are ordered lexicographically, ignoring the identifier except in the case of ties. 
In the case of ties (if there are two lines that are identical except for the identifier) 
the identifier is used to break the tie (order lexicographically). 
Alphanumeric should be sorted in ASCII order (numbers come before letters, and uppercase letters precede lowercase letters). 
Lines with integers (error type 2) must be left in the original order they were in the file.
Write an algorithm to reorder the data in the log file, according to the rules above.
*/
const reorderLogFileData = (logs) => {
  // Separate arrays to store integer(error type 2) and word (error type 1) logs
  const integerLogs = [];
  const wordLogs = [];

  // Separate error logs based on the type and store it in their respective arrays
  for (let log of logs) {
    const arr = log.split(" ");
    if (isNaN(arr[1])) {
      // Storing id and body in an object to make sorting easy based on requirements
      wordLogs.push({ id: arr.slice(0, 1), body: arr.slice(1).join(" ") });
    } else integerLogs.push(log);
  }

  // Sorting the word logs based on the error ignoring identifier, if there is a tie based on identifier
  wordLogs.sort((log1, log2) => {
    if (log1.body === log2.body) {
      return new Intl.Collator("en", {
        numeric: true,
        caseFirst: "upper",
      }).compare(log1.id, log2.id);
    }
    return new Intl.Collator("en", {
      numeric: true,
      caseFirst: "upper",
    }).compare(log1.body, log2.body);
  });

  // Rearranging the word Logs
  const sortedWordLogs = wordLogs.map((log) => `${log.id} ${log.body}`);

  // Returning Sorted Log Array
  return sortedWordLogs.concat(integerLogs);
};

console.log(
  reorderLogFileData([
    "b12 8 3 5 2",
    "v1 err var",
    "ap9 3 9",
    "hf2 err var",
    "t12 goog ana",
    "u2 fa handle err",
  ])
);
// ["hf2 err var", "v1 err var", "u2 fa handle err", "t12 goog ana", "b12 8 3 5 2", "ap9 3 9"]
