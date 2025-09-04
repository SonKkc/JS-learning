const animal = {
  makeSound() {
    console.log("Some sound...");
  }
};

const dog = Object.create(animal);
dog.bark = function() {
  console.log("Woof!");
};

dog.makeSound();
dog.bark(); 

const vehicle = {
  start() {
    console.log("Vehicle started");
  },
  stop() {
    console.log("Vehicle stopped");
  }
};

const car = Object.create(vehicle);
car.brand = "Toyota";
car.drive = function() {
  console.log(`${this.brand} is driving`);
};

const electricCar = Object.create(car);
electricCar.brand = "Tesla";
electricCar.charge = function() {
  console.log(`${this.brand} is charging`);
};

car.start(); 
car.drive(); 
car.stop();

electricCar.start(); 
electricCar.drive(); 
electricCar.charge(); 
electricCar.stop();