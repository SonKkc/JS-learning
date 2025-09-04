const person = { name: "Alice", age: 25 };

const str = JSON.stringify(person);
console.log(str);

const obj = JSON.parse(str);
console.log(obj);

const user = {
  name: "Mai",
  age: 28,
  contact: {
    email: "mai@email.com",
    phone: "0123456789"
  },
  skills: ["JavaScript", "HTML", "CSS"]
};

const jsonStr = JSON.stringify(user);
console.log("JSON string:", jsonStr);

const parsedUser = JSON.parse(jsonStr);
console.log("Parsed object:", parsedUser);

console.log("User's email:", parsedUser.contact.email);
console.log("User's first skill:", parsedUser.skills[0]);