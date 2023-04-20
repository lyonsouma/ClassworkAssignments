                    // INHERITANCE
 /*
 class User{
    constructor(name, sex, age){
        this.name = name;
        this.sex = sex;
        this.age = age;
    }

    login(){
      console.log(this.name, 'has logged in')
    }

    logout(){
        console.log(this.name, 'has logged out')
    }
 }

 var User2 = new User('Lyons', 'male', 21);
 var User3 = new User('Faith', 'female', 20);

 console.log(User2);

 User2.login();
 User3.logout();
 */

   /*                         // ASSIGNMENT(17/4/2023)
    
    class Person {
        constructor(name, age, gender){
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
       eat(){
        console.log(this.name, 'can eat');
       }

       walk(){
         console.log(this.name, 'can walk');
       }
    }

    class Student extends Person{
        constructor(name, age, gender,program, studyYear){
          super(name, age, gender)
            this.program = program;
            this.studyYear = studyYear;
        }
       study(){
        console.log(this.program, 'was studied');
       }

       hadExam(){
         console.log(this.name, 'took exam');
       }
    }



    class Teacher extends Person{
        constructor(name, age, gender,designation, salary){
          super(name, age, gender)
            this.designation = designation;
            this.salary = salary;
        }
       teach(){
        console.log(this.name, 'can teach');
       }

       takeExam(){
         console.log(this.name, 'can sit for an examination');
       }        
    }



    class Doctor extends Person{
        constructor(name, age, gender,designation,salary){
          super(name, age, gender)
            this.designation = designation;
            this.salary = salary;
        }
       checkup(){
        console.log(this.name, 'is responsible for checkup since he is a docter');
       }

       prescribe(){
         console.log(this.name, 'gave prescription');
       }       
    }

    var doc = new Person('Lyons', 21 , 'male', 'CEO' , 300000)
    console.log(doc);
    

                  // ABSTRACTION
   class Employee{
    #monthlyBonus;
    constructor(name, age, salary){
      this.name = name;
      this.age = age;
      this.salary = salary;
      this.#monthlyBonus = 20000; 
    }

    finalSalary(){
      let FinalSalary = this.salary + this.#monthlyBonus;
      console.log("Your final salary is: " + FinalSalary);
    }

    get getEmpDetails(){
      // return(`Your name is: ${this.name} , You are :${this.age} years old, your monthly salary is ${this.salary}`);
      return this.finalSalary();
    }
   } 

   Emp1 = new Employee('John', 21 , 450000);
   console.log(Emp1);
   */