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
console.log('pedro, tiago, joao'.split(',')); //Conver string em array, determinando qual será o separador
console.log(TEXTO.endsWith('o')); //Para saber se termina com determinado caractere
console.log(TEXTO.startsWith('T')); //Para saber se inicia com determinado caractere
//OBS: Nos últimos dois casos é case sensitive