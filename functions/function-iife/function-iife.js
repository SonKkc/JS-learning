(function() {
    console.log("Hello IIFE");
})();

(function(name) {
    console.log(`Hello, ${name}`);
})("Son");