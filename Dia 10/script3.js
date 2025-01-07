let numeros = []
let numDeNumeros = parseInt(prompt("Quantos números você deseja digitar?"))

for (let i = 0; i < numDeNumeros; i++){
    let numero = parseFloat(prompt(`Digite seus números: `))
    if(!isNaN(numero)){
        numeros.push(numero);
    }
}
alert(`Sua lista de números é ${numeros} e a lista inversa é ${numeros.reverse()}`)