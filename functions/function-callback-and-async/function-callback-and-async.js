function afterHello() {
    console.log("This runs after hello.");
}

function sayHello(name, callback) {
    setTimeout(() => {
        console.log(`Hello, ${name}!`);
        callback();
    }, 1000);
}

sayHello("Son", afterHello);

async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

getData("https://api.sampleapis.com/beers/ale")
    // .then(data => console.log(data))
    .then((data) => {
        const names = data.map((item) => item.name);
        console.log(names);
    })
    .catch((error) => {
        console.error("Có lỗi xảy ra:", error);
    });
