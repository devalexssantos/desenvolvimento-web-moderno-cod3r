//ATRIBUIÇÃO (simbolo igualdade)
let a = 2;
console.log(a);

a += 2; //Atribuição aditiva
console.log(a);

a -= 2; //Atribuição subtrativa
console.log(a);

a *= 2; //Atribuição multiplicativa
console.log(a);

a /= 2; //Atribuição divisiva
console.log(a);

a %= 2; //Atribuição modular
console.log(a);
/*
É como se fizesse:
a = a + 2
a = a - 2
...
*/

//ARITMÉTICOS
let b = 5;
console.log(b);

console.log(b + 5); //soma
console.log(b - 3); //Subtração
console.log(b * 10); //Multiplicação
console.log(b / 3); //Divisão
console.log(b % 2); //Modulo
/*
Ordem de precendencia:
1. ()
2. *, / e % sempre da esquerda p/ direita
3. + e - sempre da esquerda p/ direita
*/

//RELACIONAIS (retorna true e false)
console.log(a > b); //Maior
console.log(a < b); // Menor
console.log(a >= b); //Maior igual
console.log(a <= b); //Menor igual
console.log(a == b); //Igual
console.log(a === b); //Extritamente igual (compara valor e tipo)
console.log(a != b); //Diferente
console.log(a !== b); //Extritamente diferente (compara valor e tipo)

//LÓGICOS
console.log((a && b) > 0); //Comparando E
console.log((a || b) > 0); //Comparando OU
console.log((!b) > 0); //Comparando NÃO

//UNÁRIOS
console.log(--b); //Ele já muda o valor na execução
console.log(a++); //Ele muda o valor depois da execução
console.log(a); //Aqui já será alterado
//A forma pré-fixada tem precedencia sobre a pós-fixada

//TERNÁRIO
let parOuImpar = numero => numero % 2 === 0 ? 'Par' : 'Impar';
console.log(parOuImpar(2));
console.log(parOuImpar(3));

let nota = 9;
let resultado = nota >= 7 ? 'Aprovado' : 'Reprovado';
console.log(resultado);