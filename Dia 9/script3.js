let anoNasc = parseInt(prompt('Digite seu ano de nascença: '))
let anoAtual = 2025;
let idadeAtual = 0; 

let rodarNovamente = 0;

for(anoNasc; anoNasc < anoAtual; anoNasc++ && idadeAtual++ ){
    console.log(`${anoNasc} - ${idadeAtual} anos de idade`)
}


do {
    rodarNovamente = (prompt('Deseja rodar novamente? (s/n)')).toLocaleLowerCase();
    if (rodarNovamente !== 's' && rodarNovamente!== 'n'){
        console.log('Por favor, insira "s" para sim ou "n" para não.');
    }
}while(rodarNovamente !== 'n');



