                            //  FUNCTIONS
    
  function fizzBuzz (number){
    let i = number ;
        if(i%3 == 0 && i%5 == 0){
           console.log(i +" Fizz Buzz");
        }
        else if(i%5 == 0){
          console.log(i +" Buzz");
        }
        else if(i%3 == 0 ){
          console.log(i +" Fizz");
        }
        else{
            console.log(i + " Not divisible by both 3 and 5");
        }
      }
 
  fizzBuzz(2);