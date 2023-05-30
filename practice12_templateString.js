const firstName = "Ömer";
const lastName = "H.";
const age = 28;

// print out first name is ...
console.log("first name is " + firstName);

// `backtick symbol for template String
console.log(`first name is ${firstName}`);

// print out full name
console.log(`Full Name is ${firstName} ${lastName} and she is ${age} years old.`);

const multiline = 
`This is line 1
This is line 2
This is line 3`

// console.log(multiline);
console.log(`Uppercase version is:
${multiline.toUpperCase()}`);

const num1 = 10;
const num2 = 7;

console.log(`The result of adding ${num1} to ${num2} is ${num1+num2}`);

