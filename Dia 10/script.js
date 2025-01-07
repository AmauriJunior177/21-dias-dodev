let continuar = true;


while(continuar){
    let array = ["Joao", "Lucas", "Marcelo", "Marcos", "Matheus", "Amauri", "Pedro", "Jaime", "Guilherme", "Paulo"];
    let numInt = parseInt(prompt("Digite um número de 0 a 9: "))
    if(numInt >= 0 && numInt <= 9){
        alert(`O nome correspondente é: ${array[numInt]}`)
    }else {
        alert("Por favor, insira um número entre 0 e 9.")
        continue;
    }

    let desejaContinuar = prompt("Deseja continuar? Digite 1 para um novo nome")
    if(desejaContinuar === null || desejaContinuar.trim() !== "1"){
        continuar = false;
    }
   
}

alert("Programa finalizado!! ")
