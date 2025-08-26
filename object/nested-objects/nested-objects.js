const user = {
  name: "Bob",
  address: {
    city: "Hanoi",
    zip: 10000
  }
};

console.log(user);
console.log(user.address);
console.log(user.address.city);

const student = {
    name: "Alice",
    age: 22,
    profile: {
        email: "student@email.com",
        phone: "0123456789"
    }
};
console.log("-------------------------------------------------");
console.log(student);
console.log(student.profile);
console.log(student.profile.email);
console.log(student.profile.phone);