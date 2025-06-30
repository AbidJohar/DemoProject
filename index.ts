 
 function abid<T>(a: T){

  if(typeof(a)=== "string"){
    console.log("string:",a);
  }
    else {
      console.log("number:",a);
      
    }
    
  }


 abid<string>('abid');
 abid<number>(7);