let brand = "Nike";
let type = "Shoes";

const product = { brand, type };
console.log(product);

let title = "JavaScript";
let author = "Son";
let year = 2024;

function course(title, author, year){
    return { title, author, year };
}

const myCourse = course(title, author, year);
console.log(myCourse);


