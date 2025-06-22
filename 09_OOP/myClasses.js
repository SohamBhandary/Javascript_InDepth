class User{

    constructor(username,email,pass){
        this.username=username
        this.email=email
        this.pass=pass

    }
    encryptPassword(){
        return `${this.pass}abc`
    }

}
const chai = new User("Chai","chai@gmail.com","123")
console.log(chai.encryptPassword());
