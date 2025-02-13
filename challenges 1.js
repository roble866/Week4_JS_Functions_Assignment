/*
Task 1: Library Late Fee Calculator 🚀🚀🚀🚀

You are working at a library and need to calculate late 
fees for overdue books. Write a function called `calculateLateFee` gitgit
that takes the number of overdue days as input and calculates 
the fee ($0.25 per day). Prompt the user to input the
number of overdue days.

Log the result as:

"The late fee is $[amount]."

Example:
User Input: 10
Output: "The late fee is $2.50."
*/

// ✍️ ✍️ ✍️ ✍️ Write the function here ✍️ ✍️ ✍️ ✍️

const input = prompt (`input the number of overdue days`)

const overdueDays = Number(input);

function calculateLateFee(days) {
   return input * .25
}

console.log(calculateLateFee())


// Extra Task:
// - Convert the function into a function expression.

/*
Task 2 : Favorite Color Finder 🚀🚀🚀🚀

You are designing a game that asks players for their favorite color. 
Write a function called `findColorMeaning` that takes a color as input 
(prompt the user) and logs the following meanings:

- "Blue: You love calm and peace."
- "Red: You are passionate and bold."
- "Green: You are connected to nature."
- "Yellow: You radiate happiness and energy."
- For any other color: "That's a unique choice!"

Example:
User Input: "Red"
Output: "Red: You are passionate and bold."
*/

// ✍️ ✍️ ✍️ ✍️ Write the function here ✍️ ✍️ ✍️ ✍️


const input = prompt ("input the color")

function findColorMeaning(color) {
  if (color === "blue") {
    console.log("You love calm and peace.");
  } else if (color === "red") {
    console.log("You are passionate and bold.");
  } else if (color === "green") {
    console.log("You are connected to nature.");
  } else if (color === "yellow") {
    console.log("You radiate happiness and energy.");
  } else {
    console.log("That's a unique choice!");
  }
}
console.log(findColorMeaning(input)())


// Extra Task:
// - Rewrite the function using an arrow function.



/*
Task 3 : Lawyer's Case Log 🚀🚀🚀🚀

You’re a lawyer, and you’ve been assigned to organize your case files. 
Write a function called `logCase` that takes the client's name and 
the case number as parameters. For each case, log:

"Case #[caseNumber]: [clientName]'s case is now logged."

Example:
Input: logCase("John Doe", 12345)
Output: "Case #12345: John Doe's case is now logged."
*/

// ✍️ ✍️ ✍️ ✍️ Write the function here ✍️ ✍️ ✍️ ✍️

const clientName = "John Doe";
const caseNumber = 12345;

function logCase(name, number) {
  return `Case #${number}: ${name}'s case is now logged.`;
}
 console.log(logCase(clientName, caseNumber))

// Extra Task:
// - Rewrite the function as an arrow function.


/*
Task 4 : Attendance Tracker 🚀🚀🚀🚀

You’re a teacher tracking student attendance. Write a function called 
`markAttendance` that takes a student’s name and a boolean `isPresent` 
value. If the student is present, log:

"[studentName] is present."

If the student is absent, log:

"[studentName] is absent."

Example:
Input: markAttendance("Amina", true)
Output: "Amina is present."
*/

// ✍️ ✍️ ✍️ ✍️ Write the function here ✍️ ✍️ ✍️ ✍️

const studentName = "Amina";
const isPresent = true;

function markAttendance(name, present) {
  if (present) {
    return `${name} is present.`;
  } else {
    return `${name} is absent.`;
  }
}
const attendance = markAttendance(studentName, isPresent);
console.log(attendance);

// Extra Task:
// - Convert the function into a function expression.



/*
STRETCH TASK: Student Grade Report Generator 🏈🏈🏈🏈

You are a teacher, and you want to automate the creation of detailed grade reports for your class. Write a program that includes the following steps:

1. Write a function called `calculateAverage` that takes three test scores (numbers) as parameters and returns the average of those scores.

2. Write another function called `determineGrade` that takes the average score as a parameter and returns the letter grade based on the following rules:
   - "A" for average scores of 90 and above
   - "B" for scores between 80 and 89
   - "C" for scores between 70 and 79
   - "F" for scores below 70

3. Write a third function called `generateReport` that:
   - Takes a student's name and three test scores as parameters.
   - Uses `calculateAverage` to calculate the average score.
   - Uses `determineGrade` to find the letter grade.
   - Returns a full report string in this format:
     "[StudentName] - Average Score: [average], Grade: [letterGrade]"

4. Finally, use the `prompt` function to input the student’s name and three test scores, and display the generated report using `console.log`.

Example:
User Input:
Name: Amina
Scores: 85, 90, 78

Output:
"Amina - Average Score: 84.33, Grade: B"

Extra Credit:
- Extend the program to accept multiple students' names and scores and generate a report for each student using a loop.
- Use an arrow function for at least one of the functions.
*/

// Answer for Question 1

function calculateAverage(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
}

// Answer for Question 2

function determineGrade(average) {
  if (average >= 90) {
    return "A"}
    else if (average >= 80) {
      return "B"
    }
    else if (average >= 70) {
      return "C"
    }
    else { 
      return "F"

    }

}

// Answer for Question 3

function generateReport(studentName, score1, score2, score3) {
  
}


