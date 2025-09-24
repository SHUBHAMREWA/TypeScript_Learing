
interface infoSave {
       name : String , 
       age : number ,
       class : String 
}
  

const student : infoSave = {
      name : "kapil" , 
      age : 34, 
      class : "12th"
}    


// we can use Exteds method for exten interface 
interface teacher extends infoSave { 
         subject : String 
}

const teacher : teacher = { 
      name : "rosie" , 
      age : 35 , 
      class : "masters"        , 
      subject : "maths"
}


console.log(student) ;
console.log(teacher)
