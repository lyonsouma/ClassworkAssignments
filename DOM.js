document.getElementById("click").onclick = function (){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let sum = num1 + num2;

    document.getElementById("answer").innerHTML ="The answer is : " +sum;
}                        