let nome = prompt('Digite seu nome: ')
let idade = parseFloat(prompt('Digite sua idade (anos):'))
let salario = parseFloat(prompt('Digite seu salário (R$):'))

let correto = false;

while(!correto){
    let confirmacao = prompt(
        `Confirme suas informações, Nome: ${nome}, Idade: ${idade}, Salário: ${salario} (sim/não)`
    );

    if(confirmacao.toLocaleLowerCase() === 'sim'){
        correto = true; // sai do loop
    }else {
        let nome = prompt('Digite seu nome novamente: ')
        let     idade = parseFloat(prompt('Digite sua idade (anos)novamente:'))
        let     salario = parseFloat(prompt('Digite seu salário novamente (R$):'))    

    }
}













