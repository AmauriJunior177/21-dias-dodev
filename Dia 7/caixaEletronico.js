let saldo = 1000;
let maiorValorInserido = 0;
let somaValoresInseridos = 0;
let totalTransações = 0;
let continuar = true;


let nomeCpf = prompt('Digite seu NOME e seu CPF: ');

while (continuar) {
   
    let opcao = prompt('Você deseja Sacar ou Depositar? (Digite "Sacar" ou "Depositar")').toLowerCase();
    let valor = Number(prompt('Digite o valor desejado: '));

   
    if (valor <= 0) {
        console.log('Valor inválido! Insira um valor maior que zero.');
        continue;
    }

    
    if (opcao === 'sacar') {
        if (valor > saldo) {
            console.log('Saldo insuficiente para realizar o saque.');
        } else {
            saldo -= valor;
            console.log(`Saque de R$${valor} realizado com sucesso.`);
        }
    } 
    
    else if (opcao === 'depositar') {
        saldo += valor;
        console.log(`Depósito de R$${valor} realizado com sucesso.`);
    } 
    
    else {
        console.log('Opção inválida. Tente novamente.');
        continue;
    }

    
    somaValoresInseridos += valor;
    totalTransações++;
    if (valor > maiorValorInserido) {
        maiorValorInserido = valor;
    }

    
    let resposta = prompt('Deseja continuar? (Digite "1" para continuar ou "2" para parar): ');
    if (resposta !== '1') {
        continuar = false;
    }
}

console.log('Resumo Final:');
console.log(`Saldo Total: R$${saldo}`);
console.log(`Maior valor inserido: R$${maiorValorInserido}`);
console.log(`Média dos valores inseridos: R$${(somaValoresInseridos / totalTransações).toFixed(2)}`);
