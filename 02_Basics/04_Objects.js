// const tinderUser = new Object();
const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="sam"
tinderUser.isLoggedIn=false
// console.log(tinderUser);
// const regularUser={
//     email:"123@gmail.com",
//     fullname:{userFullName:{
//         firstName:"Soham",
//         lastName:"Bhandary"
//     }}
// }
// // console.log(regularUser.fullname?.userFullName.firstName);
// const obj={1:"a",2:"b"}
// const ob2={3:"c",4:"d"}
// // const obj3=Object.assign({},obj,ob2)
// const obj3={...obj,...ob2}
// console.log(obj3);
const users=[{id:1,email:"hello"},{id:1,email:"hello"},{id:1,email:"hello"}]
users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn"));



