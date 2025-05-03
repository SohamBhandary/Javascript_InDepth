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
function addTwoNumbers(num1, num2) {
    // Return the sum of num1 and num2
    return (num1 + num2);
}

// Call the function and log the result
// console.log(addTwoNumbers(2, 2)); // Output: 4
function userLoginMessage(username){
    if(username===undefined){
        console.log("Please Enter Valid user name");
        

    }
    return `${username} just logged in`
}
console.log(userLoginMessage("Soham"));
