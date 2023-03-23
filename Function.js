   /*        
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

  */

                // AN ANONIMUS FUNCTIONS

    let addNum = function(num1,num2){
      let answer = num1 + num2;
      console.log(answer);
    }
addNum(4 ,10)
        //  Arrow Functions
    
   let AddNumber = (num1,num2) => {
      let answer = num1 + num2;
      console.log(answer);
    }

    AddNumber(2,5)

            // Arrow function with one perameter


      let checkAge = Age => Age;
      console.log(checkAge(5));