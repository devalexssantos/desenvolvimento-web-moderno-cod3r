//Faça um algoritmo para trocar os valores das variáveias A e B

let a = 2;
let b = 3;

//resolução 1
let temporaria;

temporaria = a;
a = b;
b = temporaria;
console.log(a, b);

//resolução 2 ES6
a = 5;
b = 7;

[a, b] = [b, a];

console.log(a, b);