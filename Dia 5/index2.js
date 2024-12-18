let escolha = prompt('Escolha  abastecer com gasolina / alcool ou calibrarpneu')



switch(escolha){
    case 'gasolina':
        let gasolina = Number(prompt("Quantos litros deseja? Litro da gasolina = R$5 "))
        console.log('Você abasteceu: ' + gasolina + ' litros, e o total foi de R$' + (gasolina * 5 ))
        break;
    case 'alcool':
        let alcool = Number(prompt("Quantos litros deseja? Litro da alcool = R$3 "))
        console.log('Você abasteceu: ' +alcool + ' litros, e o total foi de R$ ' + (alcool * 3 ))
        break;
    default:
        console.log('Pneus calibrados, boa viagem!')
}


















// 1.1 - Crie um algoritmo que peça para o usuário escolher entre 3 opções em um posto de gasolina: abastecer com gasolina, com álcool ou calibrar os pneus.
//1.2 - Se o usuário escolher abastecer com gasolina, você deve solicitar o valor desejado e exibir no console a quantidade em litros que foi abastecida (litro de gasolina = R$5) 
//1.3 - Se o usuário escolher abastecer com álcool, você deve solicitar o valor desejado e exibir no console a quantidade em litros que foi abastecida (litro de álcool = R$3)
//1.4 - Se o usuário escolher calibrar os pneus, exiba no console a mensagem: "pneus calibrados com sucesso".