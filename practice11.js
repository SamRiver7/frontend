const p1 ={
    firstName : "Elif",
    lastName : "Bulut",
    gender : "Female"
};

// console.log(p1.firstName);

// // store fields into variables, use destructing syntax
// let { firstName, lastName, gender} = p1;
// // 3 variables were created and extracted the fields of p1 object and
// // assigned the values into variables
// console.log(firstName);
// console.log(lastName);
// console.log(gender);

// we can use destructing syntax in a function
// this function takes firstName and lastName values from a given object
function printPerson( {firstName, lastName} ){
    console.log(firstName);
    console.log(lastName);
}

printPerson(p1);