let aluno = [];
let nota = [];
let condicao = true;

while (condicao) {
    let nome = prompt("Digite o nome do aluno: (digite n para parar)");
    if (nome === "n") {
        break;
    }
    let notaProva = parseInt(prompt("Digite sua nota da prova: "));

    aluno.push(nome);
    nota.push(notaProva);
}

let somaNotas = 0;

for (let i = 0; i < aluno.length; i++) {
    console.log(`A nota de ${aluno[i]} foi ${nota[i]}`);
    somaNotas += nota[i];
}

let mediaGeral = somaNotas / aluno.length;

console.log(`Soma das notas: ${somaNotas}`);
console.log(`Média geral da turma: ${mediaGeral.toFixed(2)}`);
