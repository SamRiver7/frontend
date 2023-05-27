let names = ["James", "Ozzy", "Sam", "Tyson", "Brooks"];

// function printStuff(stuff){
//     console.log(stuff);
// }

// const printStuff = stuff => console.log(stuff);
// names.forEach( printStuff );

names.forEach(stuff => console.log(stuff));

names.push("Mike");

console.log(names);

// store the first and second item into a vairable a,b
let [a, b ] = names;

console.log(a + ' has character count of ' + a.length);
console.log(b + ' has character count of ' + b.length);

// // create a new empty array wih name charCountArray
// let charCountArray = [];
// // go through each and every item in names array
// for(let each of names){
//     // get the character count and add it into charCountArray using push method
//     charCountArray.push(each.length);
// }

// map method of array, it returns the manipulated item
let charCountArray = names.map( each => each.length );
console.log(charCountArray);

let upperCaseNames = names.map( each => each.toUpperCase() );
console.log(upperCaseNames);

// filter method of array expect you to provide a predicate function
let filteredNames = names.filter( each => each.length==4 );

let scores = [56, 99, 65, 100, 45];

let passedScores = scores.filter( each => each>70 );
console.log(passedScores);

