// let myHeros = ["thor", "spiderman"]


// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",

//     getSpiderPower: function(){
//         console.log(`Spidy power is ${this.spiderman}`);
//     }
// }

// Object.prototype.hitesh = function(){
//     console.log(`hitesh is present in all objects`);
// }

// Array.prototype.heyHitesh = function(){
//     console.log(`Hitesh says hello`);
// }
// heroPower.hitesh()
// myHeros.heyHitesh()

//inheritence
const user={
    name:"chai",
    email:"chai@gmail.com"
}
const teacher={
    makeVideo:true
}
const teachingSupport={
    isAvaialable:false
}
const TA={
    makeAssigemnt:"js assignment",
    fullTime:true,

    __proto__:teachingSupport


}
teacher.__proto__=user

//modern syntax
Object.setPrototypeOf(teachingSupport,teacher
    
)
let anotherName="Chaiaurcode "
String.prototype.trueLenght=function(){
    console.log(`${this.name}`);
    console.log(`${this.trim().length}`);
    
}
anotherName.trueLenght()