console.log(greet("Son")); 
// có thể gọi trước khi khai báo
function greet(name) {
    return `Hello, ${name}!`;
}

const sayHi = function(name) {
    return `Hi, ${name}!`;
};
console.log(sayHi("Mai"));
// chỉ có thể gọi sau khi khai báo bên trên