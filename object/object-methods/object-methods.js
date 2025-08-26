const calculator = {
    add(a, b) {
        return a + b;
    },
    multiply(a, b) {
        return a * b;
    },
};

console.log(calculator.add(2, 3));
console.log(calculator.multiply(4, 5));

const greeting = {
    sayHello(name) {
        return `Hello, ${name}`;
    },
};

console.log(greeting.sayHello("Son"));
console.log(greeting.sayHello("Mai"));

const bankAccount = {
    owner: "Son",
    balance: 5000,
    // nạp tiền
    deposit(amount) {
        this.balance += amount;
        return `Deposited ${amount}. New balance: ${this.balance}`;
    },

    // rút tiền
    withdraw(amount) {
        if (amount > this.balance) {
            return "Insufficient funds!";
        }
        this.balance -= amount;
        return `Withdrew ${amount}. New balance: ${this.balance}`;
    },
    // thông tin tài khoản
    getInfo() {
        return `Owner: ${this.owner}, Balance: ${this.balance}`;
    },
};

console.log(bankAccount.getInfo());
console.log(bankAccount.deposit(2000));
console.log(bankAccount.withdraw(1000));
console.log(bankAccount.withdraw(7000));
console.log(bankAccount.getInfo());
