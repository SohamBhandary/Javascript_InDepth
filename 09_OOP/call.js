function setUserName(user){
    this.user=user
    console.log("logged");
    
}
function createuser(user,email,pass){
   setUserName.call(this,user)

    this.email=email
    this.pass=pass
}

const chai = new createuser("chai","chai@gmail.com","123")
console.log(chai);
