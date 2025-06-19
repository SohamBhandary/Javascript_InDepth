// const promise1=new Promise(function(resolve,reject){
//     //Do an asyn task
//     //Db calls,cryptograpgy,network calls
//     setTimeout(function(){
//         console.log("Async task is complete");
//         resolve();
        
//     },2000)

// })
// promise1.then(function(){
//     console.log("promise consumed");
    
// })


// new Promise(function(resolve,reject){
//     setTimeout(function(){console.log("Async task two");
//         resolve();
//     },2000)
// }).then(function(){
//     console.log("Async 2 reolsved");
    
// })

// const promise3 = new Promise(function(resolve,reject){
//     setTimeout(function(){

//         resolve({username:"chai",email:"chai@chai.com"})
//     },1000)

// })
// promise3.then(function(user){
//     console.log(user);
    

// })


// const promise4 = new Promise(function(resolve,reject){
// setTimeout(function(){
//     let error=false;
//     if(!error){
//         resolve({username:"chai",email:"chai@gmail.com"})
//     }
//     else{
//         reject("Something went wrong")
//     }
    
// },1000)

// })
// promise4
// .then((user)=>{console.log(user);
//     return user.username
// })
// .then((username)=>{
//     console.log(username);
    

// }).catch((e)=>{
//     console.log(e);
    

// }).finally(()=>{
//     console.log("This will run no matter what");
    
// })


// const promise5 = new Promise((resolve,reject)=>{
//     setTimeout(function(){
//     let error=true;
//     if(!error){
//         resolve({username:"java",email:"java@gmail.com"})
//     }
//     else{
//         reject("java went wrong")
//     }
    
// },1000)


// })
// async function consumePromise5() {
//    try {
//     const response= await promise5
//    console.log(response);
    
//    } catch (error) {
//     console.log(error);
    
    
//    }
   
    
// }
// consumePromise5()

fetch("https://jsonplaceholder.org/users")
.then((response)=>{
   return response;
    
})
.then((data)=>{
    console.log(data);
    
}).catch((e)=>{
    console.log(e);
    
})