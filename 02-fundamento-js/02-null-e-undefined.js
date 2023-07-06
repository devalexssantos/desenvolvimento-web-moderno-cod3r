//Atribuição por valor e atribução por referência
//Quando trabalha com tipos primitivos a atribuição é por valor ou seja, o valor é único em cada variável, quando trabalhamos com tipos compostos a atribuição é por referência, isso indica que se duas variáveis estiverem apontando para o mesmo endereço de memória, ao mudar em uma, muda na outra
let teste1; //Quando o valor não está atrubuído, por default ele é undefinedd

console.log(teste1);

let teste2 = null;

console.log(teste2);

//Quando não for atribuir, deixa o undefined por default, quando quiser deixar uma variável sem valor, usa o null

//Ex: tenho uma variável com valor e quero zerar ela
let a = 2;
a = null; //Para não colocar zero e dar algum erro de execução ou lógica