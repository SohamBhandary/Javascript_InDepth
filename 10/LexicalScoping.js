function outerFunction() {
    let outerVar = "I am a variable from the outer function.";

    function innerFunction() {
        console.log("Inner Function says: " + outerVar);
    }

    innerFunction();  // direct call to inner function
}

outerFunction();  // call outer function
