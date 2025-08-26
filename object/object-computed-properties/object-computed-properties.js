let key = "score";
const student = {
    [key]: 95,
};
console.log(student.score);

let prop = "email";
let value = "user@gmail.com";
let ageKey = "age";
let ageValue = 30;

const user = {
    name: "John",
    [prop]: value,
    [ageKey]: ageValue,
    ["isActive"]: true,
    ["address" + "_city"]: "HaNoi"
};

console.log(user);
 