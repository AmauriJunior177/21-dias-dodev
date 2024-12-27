operacao = prompt('Digite um operador')
let num1 = parseInt(prompt('Digite um número '))
let num2 = parseInt(prompt('Digite outro número '))

function calculadora() {
    if (operacao == '+'){
        return console.log(num1 + num2)
    }else if (operacao == '-'){
        return console.log(num1 - num2)
    }else if (operacao == '*'){
        return console.log(num1 * num2)
    }else if (operacao == '/'){
        return console.log(num1 / num2) 
    };
}
calculadora()
