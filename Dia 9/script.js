let nome = prompt('Digite seu nome:');
let idade = parseInt(prompt('Digite sua idade:'));
let peso = parseFloat(prompt('Digite seu peso:')).toFixed(1); 
let altura = parseFloat(prompt('Digite sua altura:')).toFixed(2); 
let profissao = prompt('Digite sua profissão:');

console.log(`Olá ${nome}, você tem ${idade} anos, é ${profissao}, tem ${altura}m de altura e pesa ${peso}kg.`);

if (idade >= 18) {
    console.log('Está liberado para tomar umas geladas');
} else {
    console.log('Sem gelada para você');
}

let dias = idade * 365;
let meses = Math.floor(dias / 30);
let semanas = Math.floor(dias / 7);

console.log(`Você tem ${idade} anos, o que equivale a ${dias} dias, ${meses} meses e ${semanas} semanas.`);
