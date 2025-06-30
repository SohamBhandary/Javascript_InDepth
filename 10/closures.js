function greetUser(greeting) {
    return function(name) {
        console.log(`${greeting}, ${name}!`);
    };
}

// Create customized greeters
const sayHello = greetUser("Hello");
const sayWelcome = greetUser("Welcome");

// Use them
sayHello("Soham");     // Output: Hello, Soham!
sayWelcome("Priya");   // Output: Welcome, Priya!
sayHello("Arjun");     // Output: Hello, Arjun!
