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
/*
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

  
        //  ARRAY

    let arry =[23,34,98,49,37,44];
    console.log(arry[4]);

    */


  /*

    // Write a function that is going to print 1-20 and there after get the sum of the numbers between 1-20.
     var sum =0;   
    function digits(){
          for(let i=1; i<= 20; i++){
            sum =sum+i;
          }
          console.log(sum);
         }
         digits();

    //  Write a function that returns the area of a circle when called and radius passed as a parameter.
           let r;
          function circleArea(r){
            Area = (Math.PI * r * r);
            console.log(Area);
          }
          circleArea(10);

          // Write an arrow function that accepts a string as a parameter and converts the first letter of each word of the string to upper case.

          const capitalizeWords = str =>{
               let ans = str.split(" ").map;
               console.log(ans);
          } 
               
          console.log(capitalizeWords("hello everyone today"));


*/

let count=0;

document.getElementById("decrease").onclick = function(){
document.getElementById("number").innerHTML =count-=1;
}

document.getElementById("reset").onclick = function(){
document.getElementById("number").innerHTML =count=0;
}

document.getElementById("increase").onclick = function(){
document.getElementById("number").innerHTML =count+=1;
}