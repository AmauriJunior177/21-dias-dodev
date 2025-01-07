let numeros = []

for (let i = 0; i < 5; i++){
    let numero = parseFloat(prompt(`Digite um número ${i+1} de 5`))
    if(!isNaN(numero)){
        numeros.push(numero);
    }
}
numeros.reverse();
alert(`${numeros}`)