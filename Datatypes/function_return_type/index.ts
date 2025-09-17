
function addNumber() : number {
    return 10 + 20 ;
}
let data: number =  addNumber() ;

console.log("The sum is : " + data) ; 


// when function not return anything is called  ▒▒ void function ▒▒

function returnNothing() : void {
           
}




// when a function always throws an error or never finishes its execution is called  ▒▒ never function ▒▒

function throwError() : never {
    throw new Error('This is an error message');
}


// or 

function infiniteLoop() : never {
    while (true) { 
          console.log("Hello World");
    }   
    }

    // infiniteLoop()