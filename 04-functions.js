function sum(a, b){
    return a+b;
}

console.log(sum(5,5));

function product(a, b){
    return a*b ;
}

console.log(product(5,5));

const bigProduct = product(50,50);

console.log(bigProduct);

setTimeout(function () {
    console.log("Hey! You Rock!!!");
},1000);

setTimeout( () => console.log("Hey! You Rock!!!"),1000);

