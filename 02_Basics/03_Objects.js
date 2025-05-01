//singleton
// Object.create

//objects literals

const jsUser={
    name:"Soham",
    "fullName":"Soham Bhandary",
    age:21,
    stream:"Mca",
    isLoggedIn:false,
    lastLogIn:["Monday","Friday"]

}
// console.log(jsUser.name);
// console.log(jsUser.age);
// console.log(jsUser.stream);
// console.log(jsUser.fullName);

// jsUser.name="SOHAM"
// console.log(jsUser.name);
// Object.freeze(jsUser)


jsUser.greeting= function (){
    console.log("Hello Js user");
    
}
jsUser.greeting2= function (){
    console.log(`Hello Js user,${this.name}`);
    
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());
