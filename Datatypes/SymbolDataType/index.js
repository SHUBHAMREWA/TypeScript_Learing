var sym = Symbol("id");
var sym2 = Symbol("id");
console.log(sym == sym2);
var obj = {};
for (let i = 0; i < 5; i++) {
    let newSymbol = Symbol("newSym");
    obj[newSymbol] = i + 1;
}
console.log(obj);
export {};
