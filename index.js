/*
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
*/

/*


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
     */

     /*

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

*/

/*

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
  else{
    alert("INVALID")
  }
*/


/*
          //  ENSURE THE PASSWORD HAS 10+ CHARACTERS
{
          let password = prompt("Enter your password");

          if(password.length < 10){
            alert("password shoul be 10 charaters and above");
          }
          else{
            alert("strong password")
          }

}

{
  
 let email = prompt("Enter your email");
 let lowercase = email.toLocaleLowerCase();
 let extention = lowercase.indexOf(".com")
   
   if(extention >= 1){
   alert("Valid Email");
   }
   else if(extention < 0){
    alert("Invaild email");
   }

}

*/

/*
              LOOPS
     for loop
     for(let i = 1; i <= 10; i++){
          console.log(i);
     }
*/

 /*    while loop

  let i = 1;
    while(i <= 5){
      console.log(i);
      i++
    }
    */


     
        // DO WHILE

    //     let i = 1;
    // do {
    //   console.log(i);
    //   i++;
      
    // } while (i <= 5);


    class student{
      constructor(email,name){
        this.Email=email;
        this.Name=name;
      }
      printDetails(){
        console.log(this.Email,this.Name)
      }
    
    }
    let student2=new student("edwin54@gmail.com","edwin")
    student1.printDetails();

    class student{
      #firstName;
      #secondName;
      constructor(first,last){
        this.#firstName=first;
        this.#secondName=last;
      }
      set addFname(val){
        this.#firstName=val;
      }
      set addLast(val){
        this.#secondName=val
      }
      get fullName(){
       console.log( `your full name is ${this.#firstName} ${this.#secondName}`);
      }
    }
    let student1 = new student("edwin","ngila");
    student1.addFname="kimani";
    student1.fullName;