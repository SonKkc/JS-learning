function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum());
console.log(sum(4, 5, 6, 7));

const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];
console.log(newArr);

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);