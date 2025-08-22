
const person = {
    name: "Mai",
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};
person.greet();

const obj = {
    name: "Son",
    sayName: function() {
        return `Hello, my name is ${this.name}`;
    },
   
    sayNameArrow: () => {
        return `Hello, my name is ${this.name}`;
    },

    sayNameArrow2: () => {
        return `Hello, my name is ${obj.name}`;
    }
};

console.log(obj.sayName());     
console.log(obj.sayNameArrow());
console.log(obj.sayNameArrow2());