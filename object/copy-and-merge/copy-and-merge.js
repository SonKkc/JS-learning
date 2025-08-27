const obj1 = { a: 1 };
const obj2 = { b: 2 };

const merged = { ...obj1, ...obj2 };
console.log(merged);

const merged2 = Object.assign({}, obj1, obj2);
console.log(merged2);

const user = { name: "Mai", age: 28 };
const contact = { email: "mai@email.com", phone: "0123456789" };
const address = { city: "Hanoi", zip: 10000 };

const profile = { ...user, ...contact, ...address, isActive: true};
console.log(profile);

const update = { age: 29, city: "Da Nang" };
const updatedProfile = Object.assign({}, profile, update);
console.log(updatedProfile);