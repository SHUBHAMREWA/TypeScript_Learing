"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addNumber() {
    return 10 + 20;
}
let data = addNumber();
console.log("The sum is : " + data);
// when function not return anything is called  ▒▒ void function ▒▒
function returnNothing() {
}
// when a function always throws an error or never finishes its execution is called  ▒▒ never function ▒▒
function throwError() {
    throw new Error('This is an error message');
}
// or 
function infiniteLoop() {
    while (true) {
        console.log("Hello World");
    }
}
// infiniteLoop()
