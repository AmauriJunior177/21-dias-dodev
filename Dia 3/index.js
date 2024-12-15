let nome = (prompt('Digite seu Nome'));
let idade = parseInt(prompt('Digite seu Idade'));
let altura = parseFloat(prompt('Digite seu Altura'));
let peso = parseFloat(prompt('Digite seu Peso'));

let anoNascimento = 0
anoNascimento = (2023 - idade);

let imc = 0
imc = peso / (altura * altura);

console.log('Olá ' + nome + " você tem " + idade + ' anos, nasceu em ' + anoNascimento +  ', tem ' + altura +  ' de altura, pesa '  + peso + 'kg seu IMC é ' + imc.toFixed(2) + ' Kg/m2');


