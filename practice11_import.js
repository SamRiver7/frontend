import { sayHelloTo,addNumbers } from "./practice11_methods.js";
import chalk from "chalk";
import Person from "./practice12_person.js";

sayHelloTo('John');
sayHelloTo('Marina');

console.log(addNumbers(17,53));

console.log(chalk.green("Hello World!"));

const p1 = new Person("Dua", "D."); 
p1.printFullName();

