console.log(a); //Apesar de estar undefined ele está declarada, ou seja mesmo declarando depois, ela é issada como se estivesse no começo

var a = 'Hoisting';

console.log(a);

//Também ocorre dentro da função

function retornarNome() {
    console.log(nome);
    var nome = 'Alex';
    console.log(nome);
}

retornarNome();