function print(){
    console.log("Hello World");
}

// in order to make it available
// outside of this file use export keyword
export function sayHelloTo(name){
    console.log('Hello ' + name);
}

export function addNumbers(num1, num2){
    return num1+num2;
}