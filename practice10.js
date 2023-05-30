// we are turning Strings to js objects
let names = ["Selahaddin", "Halid", "Enes", "Said", "Ebubekir"];

// if we are using curly braces then we need to use 
// return statement
let myCoolNames = names.map(each => { 
    return {
        firstName : each,
        charCount: each.length 
    } 
});
console.log(myCoolNames);

let nums = [77, 54, 87, 19, 112];

// store nums less than 70 in a new array
const myNums = nums.filter( each => each<70 );
console.log(myNums); 

// get nums more than 55 and print each item
nums.filter( each => each>55 )
    .forEach(each => console.log(each));

names.filter(each => each.length>4)
     .map(each => each.toUpperCase())
     .forEach(each => console.log(each));

