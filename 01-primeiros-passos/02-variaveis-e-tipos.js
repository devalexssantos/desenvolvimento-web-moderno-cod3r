
//VARIÁVEIS
//Para armazenas dados em JS utiliza: var, let ou const

/*
var: tem escopo global e pode ser redeclarada e ter o valor reatribuido
let: tem escopo local e pode apenas ter o valor reatribuido não pode ser redeclarado
const: tem escopo local e não pode ser redecclarado ou reatribuir valor
*/

var nome = 'Alex';
let idade = function calcularIdade() {  //Estou usando variável por já ter um conhecimento prévio, mas não é o objeto da aula
    let now = new Date;
    let anoAtual = now.getFullYear();

    return anoAtual - 1993;
}
const ALTURA = 1.64;

console.log(nome, idade(), ALTURA);

//TIPOS PRIMITIVOS
let nomePessoa = 'José'; //Estre aspas duplas, simples e crase é STRING um texto simples, uma sequencia de caracteres
let idadePessoa = 40; //Number se refere tanto para números inteiros quanto com ponto flutuante e também negativos
let alturaPessoa = 1.75; //Com ponto flutuante é número
let casadoPessoa = true; //Booblean recebe verdadeiro ou falso apenas

console.log(
    typeof nomePessoa,
    typeof idadePessoa,
    typeof alturaPessoa,
    typeof casadoPessoa
);