class User{
    constructor(usr){
        this.usr=usr
    }
    logMe(){
        console.log(this.usr);
        
    }
}
class Teacher extends User{
    constructor(usrname,email,pass){
        super(usrname)
        this.email=email
        this.pass=pass
    }
    addCourse(){
        console.log(`${this.usr} added `);
        
    }
}
const chai = new Teacher("chai","chai@gmail.com","123")
chai.addCourse();