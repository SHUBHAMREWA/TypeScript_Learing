
var UserData : {
       [key : string] : string | number | undefined | { 
              [key : string] : string | number | undefined
       }
}  = 
   {
       name : "shubham" , 
       claass : 6 ,  
        //  this is nested Object 
       address : {
            city : "rewa" , 
            state : "Madhya Pradesh" ,  
            pinCode : 486001
       }
   }


//     OR Second Option to declear a Object Data type  

var userData2 : {  
        name : string ,
        email : string , 
        number : number , 
        address  :{  
                city : string , 
                state : string , 
                pincode : number         }
}   = {
    name : "shubham" , 
    email : "shubhamrewaamp18@tamil.com" , 
    number : 98 , 
    address : {
        city : "rewa" , 
        state : "Madhya Pradesh" , 
        pincode : 486001
    }
}


console.log(UserData)  
console.log(userData2)
  
 