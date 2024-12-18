let num1 = Number(prompt('Digite o primeiro  número: '))
let num2 = Number(prompt('Digite o segundo número: '))
let operador = prompt('Escolha entre', '+',  '/', '-',  '*')

switch(operador) {
    case '+':
        console.log('Você escolheu soma, então: ' + (num1 + num2))
        break;
    case '-':
        console.log('Você escolheu subtração, então: ' + (num1 - num2))
        break;
    case '*':
        console.log('Você escolheu multiplicação, então: ' + (num1 * num2))
        break;
    default:
        console.log('Você escolheu divisão, então: ' + (num1 / num2))
        break;
}








// 1.1 - Crie um algoritmo que peça 2 números ao usuário

// 1.2 - Utilizando o switchCase dê a opção do usuário escolher qual operação matemática será realizada com esses números

//1.3 - Exiba no console a operação feita e o resultado da conta