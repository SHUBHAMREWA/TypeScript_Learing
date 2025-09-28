//  Union data type   ==> 
//  we use Union data type for Store MORE then one value in Any variable 
//  this is represented By symbol of pie ( | )
var dataUnion = "kapil";
dataUnion = 12;
console.log(dataUnion);
// spread / rest operation testing    
// rule 1. we are using spred  ... operation for in Function parametes for combile all argument in Array 
// Example -->  
function addNumbers(...items) {
    return items.reduce((acc, cur) => {
        return acc + cur;
    }, 0);
}
let value = addNumbers(2, 3, 4, 5);
console.log("this a value from ... operator use in function parameter", value);
//   rule 2 => we are using rest ... operation for in function argument when we need to sepret all array or object value 
const addValues = (val1, val2, val3) => {
    return val1 + val2 + val3;
};
let datas = [1, 2];
let values = addValues(...datas, "< = >ye work kr raha hai");
console.log(values);
export {};
