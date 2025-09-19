"use strict";
//  this is fuction return type 
Object.defineProperty(exports, "__esModule", { value: true });
const addNumbers = (item, price, text) => {
    if (text) {
        console.log(item * price, text);
    }
    else {
        console.log(item * price);
    }
};
addNumbers(2, 12, "yahi toh chakkar hai");
addNumbers(23, 23);
