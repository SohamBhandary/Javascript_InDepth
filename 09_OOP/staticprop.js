class User {
constructor(username){
    this.username=username
}
logMe(){
    console.log(`Username ${this.username}`);
    
}
static createId(){
    return `123`
}

}
const soham= new User("Hitesh")

// console.log(soham.createId());
class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}
const iphoen = new Teacher("iphone","Emial")
iphoen.logMe()