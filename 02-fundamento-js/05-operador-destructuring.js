//Destructurig para objeto

const OBJ = {
    nome: 'Alex',
    peso: 68.7,
    altura: 1.64,
}

const {nome, peso, altura} = OBJ;

console.log(nome, peso, altura);

//Destructuring array
[a, b, c] = [1, 2, 3];

console.log(a, b, c);