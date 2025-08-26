const person = { name: "Alice", age: 25 };

console.log(person.name);
console.log(person["age"]);

// Thêm, sửa, xóa thuộc tính
person.country = "Vietnam";
person.age = 30;
delete person.name;

console.log(person);

const car = {
    brand: "Toyota",
    year: 2020
};

car.color ="red";
delete car.year;

console.log(car);