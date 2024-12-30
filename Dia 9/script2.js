let peso = parseFloat(prompt('Digite seu peso (kg):'))
let altura = parseFloat(prompt('Digite sua altura (m):'))
let idade = parseFloat(prompt('Digite sua idade (anos):'))

let imc = (peso / (altura * altura)).toFixed(1);
let faixa;



if(imc < 18.5){
    faixa = 'Magreza';
}else if(imc >= 18.5 || imc <= 24.9){
    faixa = 'Normal';
}else if(imc >= 24.9 || imc <= 30){
    faixa = 'Sobrepeso';
}else{
    faixa = 'Obesidade';
}

let ano = parseInt(2025 - idade); 

console.log(`Seu IMC é ${imc} (${faixa})`);
console.log(`Você nasceu no ano de ${ano}`);