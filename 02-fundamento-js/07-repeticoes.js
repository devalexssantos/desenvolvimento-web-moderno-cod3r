//While
let contador = 0;

while(contador <= 10) {
    console.log(contador);
    contador++;
}

//Do While
do {
    contador--;
    console.log(contador);
} while(contador >= 0)

//For
for (let contador = 0; contador <= 10; contador++) {
    console.log(contador);
    
}

//For in (para percorrer um array ou objeto com repetição)

//Array
let lista = ['Pedro', 'Tiago', 'João'];
for(i in lista) {
    console.log(`${i} - ${lista[i]}`);
}

//Objeto
let pessoa = {
    nome: 'Alex',
    idade: 30,
    casado: true,
}

for(atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`);
}