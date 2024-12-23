
let mediageral =0
let qtdHomens = 0
let qtdMulheresAcimsDe7 = 0
let maiorNotaHomens = 0
let contador = 1

while (contador <= 5) {
nota = parseInt(prompt("Digite a nota do " + contador + " aluno"))
sexo = prompt("DIgite o sexo do aluno (m/f)")

if (sexo == "m") {
if (nota > maiorNotaHomens) {

    maiorNotaHomens - nota
}
    qtdHomens++
}


if (sexo == "f" && nota > 7) {
    qtdMulheresAcimsDe7++
}

mediageral += nota
contador++
}

mediageral - mediageral / 5

console.log("A media geral dos alunos foi: " + mediageral)
console.log("A quantidade de homens cadastrados foi: " + qtdHomens)
console.log("A quantidade de mulheres que tiveram nota acima de 7 foi: " + qtdMulheresAcimsDe7)
console.log("A maior nota entre os homens foi: " + maiorNotaHomens)