//Condicionais simples IF

const VERIFICAR_SE_FOI_MULTADO = velocidade => {
    let multado = '';

    if(velocidade > 50) {
        multado = `Valocidade ${velocidade}. VOCÊ FOI MULTADO.`;
    }

    return multado || 'Dirija sempre com atenção';
}

console.log(VERIFICAR_SE_FOI_MULTADO(50));
console.log(VERIFICAR_SE_FOI_MULTADO(65));
console.log(VERIFICAR_SE_FOI_MULTADO(80));

//Condicionais compostas (IF ELSE)
const APROVADO_OU_REPROVADO = pontuacao => {
    if(pontuacao >= 7) {
        return 'APROVADO!'
    } else {
        return 'REPROVADO!'
    }
}

console.log(APROVADO_OU_REPROVADO(6.9));
console.log(APROVADO_OU_REPROVADO(10));

//Pode ser feito com operador ternário, tem o mesmo efeito
const APROVADO_OU_REPROVADO_2 = pontuacao => pontuacao >= 7 ? 'APROVADO!' : 'REPROVADO!';

console.log(APROVADO_OU_REPROVADO_2(7));
console.log(APROVADO_OU_REPROVADO_2(6.5));

//Condicionais aninhadas IF ELSE IF

function calcularImc(peso, altura) {
    let imc = peso / (altura ** 2);
    let resultado;
    if(imc >= 0 && imc < 18.5) {
        resultado = 'a baixo do peso';
    } else if(imc < 25) {
        resultado = 'no peso ideal';
    } else if(imc < 30) {
        resultado = 'levemente a cima do peso'
    } else if(imc < 35) {
        resultado = 'com obesidade grau 1'
    } else if(imc < 40) {
        resultado = 'com obesidade grau 2'
    } else if(imc > 40) {
        resultado = 'com obesidade mórbina'
    } else {
        resultado = '[ERRO] | Esse valor é inválido'
    }

    return `Seu ICM é: ${imc.toFixed(1)}, e você está: ${resultado}.`;
}

console.log(calcularImc(68, 1.64));
console.log(calcularImc(10, 1.64));
console.log(calcularImc(65, 1.64));
console.log(calcularImc(85, 1.64));
console.log(calcularImc(95, 1.64));
console.log(calcularImc(110, 1.64));

//Condicionais CASO

function calcularOperacaoMatematica(n1, n2, operacao) {
    let resultado;
    switch(operacao) {
        case 'somar':
            resultado = n1 + n2;
            break
        case 'subtrair':
            resultado = n1 - n2;
            break
        case 'multiplicar':
            resultado = n1 * n2;
            break
        case 'dividir':
            resultado = n1 / n2;
            break
        case 'exponenciação':
            resultado = n1 ** n2;
            break
        case 'modularização':
            resultado = n1 % n2;
            break
        default:
            resultado = `
            soma: ${n1 + n2}
            subtração: ${n1 - n2}
            multiplicação: ${n1 * n2}
            divisão: ${n1 / n2}
            exponenciação: ${n1 ** n2}
            modularização: ${n1 % n2}
            `;
        
    }

    return resultado;
}

console.log(calcularOperacaoMatematica(5, 5, 'somar'));
console.log(calcularOperacaoMatematica(5, 5, 'subtrair'));
console.log(calcularOperacaoMatematica(5, 5, 'multiplicar'));
console.log(calcularOperacaoMatematica(5, 5, 'dividir'));
console.log(calcularOperacaoMatematica(5, 5, 'exponenciação'));
console.log(calcularOperacaoMatematica(5, 5, 'modularização'));
console.log(calcularOperacaoMatematica(5, 5));