
                // IF STATEMENT

let firstName = prompt("please enter your first name");
let lastName = prompt("please enter your last name");
let fullName = firstName + "  " + lastName;

alert ("Your full name is "+ fullName)
let age = prompt("Enter your age")

if (age >=70 && age <=100){
  alert("you are " + age+ " years old")
}
else if(age >=60 && age <=69){
    alert("you are " + age+ " years old")
}
else if(age >=50 && age <=59){
    alert("you are " + age+ " years old")
}
else if(age >=40 && age <=49){
    alert("unknown")
}
else{
    console.log("E");
}

let fundermentals =parseInt(prompt("Enter marks for Fundermental"));
let resposiveWeb =parseInt(prompt("Enter marks for resposiveWeb"));
let Github =parseInt(prompt("Enter marks for Github"));

let sum = (fundermentals + resposiveWeb + Github);
let avarage = (sum/3)
 if(avarage >=75 && avarage <=100){
      alert("you scored an A of " + avarage)
      }
 if(avarage >=50 && avarage <75){
    alert("you scored an B of " + avarage)
      }
      if(avarage >=25 && avarage <50){
        alert("you scored an C of" + avarage)
      }
      if(avarage >=1 && avarage <25){
        alert("you scored an D of" + avarage)
      }
      else{
        alert("you scored an Failed")
      }



    //    SWITCH STATEMENT
     let size = 17;
     switch(size){
        case 17:
            console.log("you're 17")
            break;

    case 18:
     console.log("you're 18")
     break;
     }
     

              // MATHEMATICS CHALLANGE

    let amount = prompt("Enter Your purchase amount");
     if(amount>=10000){
        let discount = (amount*0.15);
        let amountPaid = (amount - discount)
        alert("your discount is ksh." + discount);
        alert ("Amount to pay is ksh." + amountPaid);
     }

     else if(amount >=5000 && amount <= 9999){
        let discount = (amount*0.1);
        let amountPaid = (amount - discount)
        alert("your discount is ksh." + discount+ "\n" + "Amount to pay is ksh."  + amountPaid);
     }


     else if(amount >=3000 && amount <= 4999){
        let discount = (amount*0.05);
        let amountPaid = (amount - discount)
        alert("your discount is ksh." + discount + "\n" + "Amount to pay is ksh."  + amountPaid);
     }

     else if(amount >=0 && amount <= 2999){
        let discount = 0;
        let amountPaid = (amount - discount)
        alert("your discount is ksh." + discount+ "\n" + "Amount to pay is ksh."  + amountPaid);
     }
else{
    alert("this isn't an amount")
}



         // TAKE IN THREE INPUTS AND DISPLAY THE MAXIMUM

let Number1 =parseInt(prompt("Enter first number"));
let Number2 =parseInt(prompt("Enter Second number"));
let Number3 =parseInt(prompt("Enter Third number"));

if(Number1 > Number2 && Number1 > Number3){
          alert(Number1);
      }
else if(Number2 > Number1 && Number2 > Number3){
        alert(Number2);
    }
else if (Number3 > Number1 && Number3 > Number2){
      alert(Number3);
  }