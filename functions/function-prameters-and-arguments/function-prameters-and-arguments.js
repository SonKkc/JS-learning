greet('Son', 25); 
greet('Mai', 30);
function greet(name = "Guest", age = 18) {
    console.log(`${name},${age} years old.`);
}
greet();