function counter(name = "guest") {
    let count = 0;
    return function () {
        count++;
        return `${name}: ${count}`;
    };
}
const a = counter("Son");
const b = counter();
console.log(b());
console.log(a());
console.log(a());
console.log(a());
