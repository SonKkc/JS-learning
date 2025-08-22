console.log(yourName('Thai', 'Son'));
console.log(`5 + 10 = ${addNumber(5, 10)}`);

function yourName (first, last){
    return `Hello, ${first} ${last}!`;
}
function addNumber (a, b){
    return Number(a) + Number(b);
}