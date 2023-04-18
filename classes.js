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
