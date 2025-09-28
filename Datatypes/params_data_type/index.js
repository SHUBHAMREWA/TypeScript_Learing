//  this is fuction return type 
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
export {};
