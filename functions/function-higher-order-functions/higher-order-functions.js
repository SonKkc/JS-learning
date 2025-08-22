const double = x => x * 2;
function applyTwice(operation, value) {
    return operation(operation(value));
}
console.log(applyTwice(double, 3));

function repeat(fn, times) {
    for (let i = 0; i < times; i++) {
        fn();
    }
}
repeat(() => console.log("Hello"), 3);