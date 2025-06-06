// function sayMyName(){
//     console.log("S");
//     console.log("o");
//     console.log("h");
//     console.log("a");
//     console.log("m");
    
// }
// sayMyName()
// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
    
// }
// Function to add two numbers
// function addTwoNumbers(num1, num2) {
//     // Return the sum of num1 and num2
//     return (num1 + num2);
// }

// Call the function and log the result
// console.log(addTwoNumbers(2, 2)); // Output: 4
// function userLoginMessage(username){
//     if(!username){
//         console.log("Please Enter Valid user name");
        

//     }
//     return `${username} just logged in`
// }
// console.log(userLoginMessage("Soham"));

// console.log("Hey");

// function calculateCartPrice(...num1){

//     return num1;
// }
// console.log(calculateCartPrice(200,400,500))

const user={
    username:"soham",
    price:199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
handleObject(user)


const myNewArr=[200,400,500,100]
function printArray2nd(getArray){
    return getArray[1];
}
console.log(printArray2nd(myNewArr));
