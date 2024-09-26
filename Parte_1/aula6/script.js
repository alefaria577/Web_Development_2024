/* 
VOCÊ FOI CONTRATADO PARA CRIAR UM ALGORITMO QUE LEIA UMA LISTA
E RETORNE DUAS NOVAS LISTA CONTENDO NÚMEROS PARES E IMPARES

OBS: A LISTA DEVE CONTER NÚMEROS DE 1 A 9 E DEVE SER USADO A ESTRUTURA MAIS SIMPLES
DE REPETIÇÃO

*/

// DECLARANDO AS VARIÁVEIS

let listaNumero = [1,2,3,4,5,6,7,8,9]; 
let pares = [];
let impares = [];

for(let numeros of listaNumero){

    if(numeros % 2 == 0){
        pares.push(numeros)

    }else{
        impares.push(numeros)

    }
}
console.log(pares)
console.log(impares)



/*
Um professor de karate tem uma lista de alunos (objetos) que contem o nome e nota1 e nota2.
Ele precisa calcular a média das duas notas, trazendo o nome do aluno e a media.

*/

const listaAlunos=[
    {nome:"Huguinho", notas:[5,8]},
    {nome:"Zezinho", notas:[7,8]},
    {nome:"Luizinho", notas:[6,6]},
    ]
     
    for(let alunos of listaAlunos){
    let media=(alunos.notas[0] + alunos.notas[1])/2;
    console.log(`A Média do aluno ${alunos.nome} é ${media}`)
     
    }

//Exercício 2

let sorteio = [];

while(sorteio.length<6){
    let numero = Math.ceil(Math.random() * 60)
    if(numero){
        sorteio.push(numero)
    }
}
console.log(sorteio)
