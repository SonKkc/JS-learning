const person = { name: "Alice", age: 25 };

for (let key in person) {
  console.log(key, person[key]);
}

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

const user = {
  name: "Mai",
  age: 28,
  email: "mai@email.com",
  city: "Hanoi"
};

Object.entries(user).forEach(([key, value]) => {
  console.log(`Thuộc tính: ${key} | Giá trị: ${value}`);
});

const stringProps = Object.entries(user)
  .filter(([key, value]) => typeof value === "string")
  .map(([key, value]) => `${key}: ${value}`);

console.log("Các thuộc tính kiểu string:", stringProps);

const arr = ["apple", "banana", "orange"];
for (let index in arr) {
  console.log(index, arr[index]);
}
console.log(Object.keys(arr));
console.log(Object.values(arr));
console.log(Object.entries(arr));

const longFruits = Object.entries(arr)
  .filter(([index, value]) => value.length > 5)
  .map(([index, value]) => value);

console.log("Các phần tử có độ dài > 5:", longFruits);

const fruits = [
  ["apple", "red"],
  ["banana", "yellow"],
  ["grape", "purple"]
];

fruits.forEach(([name, color]) => {
  console.log(`Fruit: ${name}, Color: ${color}`);
});

const filteredFruits = fruits.filter(([name, color]) => name.includes('e'));
console.log("Fruits with 'e' in name:", filteredFruits);