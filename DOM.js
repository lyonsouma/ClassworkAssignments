/*document.getElementById("click").onclick = function (){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let sum = num1 + num2;

    document.getElementById("answer").innerHTML ="The answer is : " +sum;
}                      

                // EVENT LISTENER
document.getElementById("click").onmouseover = function (){
    document.getElementById("click").style.backgroundColor="green";
    document.getElementById("click").style.transition="1s";   
}
document.getElementById("click").onmouseout = function (){   
    document.getElementById("click").style.backgroundColor="white"; 
}
*/
    //   SQUARE


    document.getElementById("square").onmouseover = function(){
        document.getElementById("square").style.backgroundColor ="green";
        document.getElementById("square").style.transition = "0.5s";
    }

    document.getElementById("square").onmouseout = function(){
        document.getElementById("square").style.backgroundColor =" rgb(130, 88, 37)";
    }

            // CALCULATOR
    
            function calc(){
                var a = parseInt(document.querySelector("#num1").value); 
                var b = parseInt(document.querySelector("#num2").value);
                var op= document.querySelector("#operator").value;
                var calculate;
          
                if(op == "add"){
                  calculate = a + b;
                }
                else if(op == "sub"){
                  calculate = a - b;
                }
                else if(op == "mul"){
                  calculate = a * b;
                }
                else if(op == "div"){
                  calculate = a / b;
                }
                
                  document.getElementById("ans").innerHTML =calculate;
                
           }