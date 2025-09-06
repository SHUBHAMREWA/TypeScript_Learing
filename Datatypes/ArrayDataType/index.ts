
let number: Array<number> = [1,2,3,4,5] ; 

console.log("this is array" , number) ; 

let stringData : string[]= ["shubham" , "kapil" , "vinay"] ;  

stringData.push("dinesh")

console.log("this is array data type String ", stringData) ;  


// Readonly Array Data type ;

let college : ReadonlyArray<string>  = ["IIT DELHI" , "NIT Bhopal" , "IIT Goa"]  ;

// we can't use push method on ReadonlyArray data type 