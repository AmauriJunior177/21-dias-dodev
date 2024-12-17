let fome = prompt('Você está com fome?')
let dinheiro = (prompt('Você tem dinheiro?'))
let aberto = String(prompt('O Restaurante está aberto ?'))

if (fome === 'não' || dinheiro === 'não'){
    console.log('Hoje a janta será em casa! ')
}else if (dinheiro === 'sim' && aberto === 'sim'){
    console.log('Hoje o jantar será no seu restaurante preferido!')
}else {
    console.log('Peça um delivery !')
}