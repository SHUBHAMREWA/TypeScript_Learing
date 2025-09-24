

type person1 = { name: string };

type person2 = { age: number };
type preson3 = person1 & person2;



var p1: person1 = { name: "shubham" };
var p2: person2 = { age: 23 };
var p3: preson3 = {
    name: "kapil",
    age: 33}

    console.log(p3)