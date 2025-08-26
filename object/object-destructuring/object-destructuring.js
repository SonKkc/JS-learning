const person = { name: "Alice", age: 25, city: "Hanoi" };
const { name, age } = person;

console.log(name);
console.log(age);

const movie = {title: "Inception", year: 2010, rating: 8.8};
const { title, rating } = movie;
console.log("-------------------------------------------------");
console.log(title);
console.log(rating);

const user = {
    userName: "Lam",
    age: 24,
    address: {
        city: "HCM",
        zip: 70000
    },
    contact: {
        email: "lam@gmail.com",
        phone: "0987654321"
    }
};

const { userName, address: {city, zip}, contact: {phone}} = user;
console.log("-------------------------------------------------");
console.log(userName);
console.log(city);
console.log(zip);
console.log(phone);