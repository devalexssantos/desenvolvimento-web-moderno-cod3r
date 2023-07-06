//NUMBER
//Number pode ser inteiro ou real

const numero1 = 5;
const numero2 = 7;
console.log(typeof numero1, typeof numero2);

//Para converter uma string para um number
let emTexto = '10';
let emNumero = Number(emTexto);

console.log(typeof emNumero);
console.log(typeof emTexto);

//Verificar se o number é inteiro
console.log(Number.isInteger(emNumero));
console.log(Number.isInteger(1.5));

//converter number em string
let paraTextoNovamente = emNumero.toString();
console.log(paraTextoNovamente);
console.log(typeof paraTextoNovamente);
//Operalções aritméticas com excessão da soma (que se comporta como concatenas) entre number e string o JS converte e faz a operação.
console.log('10' / 2); //resultado será 5



//STRING


//Pode ser usando aspas duplas, simples e crase para template string interpolando com variáveis
const TEXTO = 'Texto';

console.log(TEXTO.charAt(3)); //Para ver o caractere na posição 3
console.log(TEXTO.indexOf('e')); //Para saber se tem um caractere dentro da string, se não tiver ele retorna -1
console.log(TEXTO.substring(1, 3)); //Determina um intervalo ponto inicial e final de onde retornar a string
console.log(TEXTO.replace('e', 'a')); //Replace troca um caractere por outro
console.log(TEXTO.replace('e', 'a')); //Replace troca um caractere por outro
console.log(TEXTO.length); //Para saber a quantidade de letras que a palavra contém. também pode ser usado no array para saber o tamnho do array.
console.log('pedro, tiago, joao'.split(',')); //Conver string em array, determinando qual será o separador
console.log(TEXTO.endsWith('o')); //Para saber se termina com determinado caractere
console.log(TEXTO.startsWith('T')); //Para saber se inicia com determinado caractere
//OBS: Nos últimos dois casos é case sensitive

// --> template string: serve para interpolar string com variáveis de forma dinâmica

let myName = 'Alex';
let myAge = 30;

console.log(`olá, meu nome é ${myName} e eu tenho ${myAge} anos.`);



//BOOLEAN: a principio verdadeiro e falso - true e false
//resolve para falso
let falso = false; //literal
console.log(falso);
console.log(!1);
console.log(!!0); //O zero resolve para falso
//Toda estrutura vazia resolve para falso, null e undefined também
console.log(!"");

//resolve para verdadeiro
let verdadeiro = true;
console.log(verdadeiro);
console.log(!!1); //Todo número inteiro com excessão do zero resolve para verdadeiro
//toda estrutura dentro do Js que tenha pelo menos um espaço em branco, já resolve para verdadeiro
console.log(!' ')

//Sempre para converter para verdadeiro ou falso algum valor, coloca uma negativa na frente !




//ARRAY: é um vetor em JS que armazena multiplos valores no JS
let lista = [];
console.log(typeof lista); //apesar de ser um array, o tipo é object