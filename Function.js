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

/*
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


        // ARRAY
  myArray = [15,20,12,11,55];
  myArray.push(22,79,54,33,13);

        //  using for loop
  // for(let i = 0; i <= myArray.length; i++){
  //   if(myArray[i] % 5 == 0){
  //     console.log(myArray[i]);
  //   }
   
  // }

        // using a foreach loop
        
    myArray.forEach(element => {
      if(element % 5 ==0){
      console.log(element);                  
    }
    });
   /*
    function Arrayz(){
      let arry = myArray;
      console.log(arry);
    }
    Arrayz();
    */