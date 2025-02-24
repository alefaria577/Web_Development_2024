/*
//DECLARANDO VARIAVEIS
 
//Indefinido
let nome;
console.log(nome)
 
// Vazia
let disciplina = null;
console.log(disciplina)
 
//com valor
let aluno = "Zezinho";
console.log(aluno)
 
let teste = 18;
console.log(teste)
 
//CONVERSÃO
 
//Float para Int
let numero = 123.456;
console.log(parseInt(numero))
 
//String para Float
let numero1 = "123.456";
console.log(parseFloat(numero1))
 
//Float para String
let numero2 = 123.456;
console.log(numero2.toString())
 
//Verifica o tipo de variavel
let numero3 = 123.789;
let num = numero3.toString();
 
let verificar = typeof num
console.log(verificar)
 
// MANIPULAÇÃO DE TEXTOS
 
//length
let texto = "JavaScript é uma linguagem de programação"
console.log(texto.length)
document.write(texto.length)
//alert(texto.length)
 
//indexoff - contagem da posição da palavra que definiu
let texto1 = "As cps estão chegando"
console.log(texto1.indexOf("ch"))
 
//lastindexOff()
let texto2 = "As cps estão chegando"
console.log(texto2.lastIndexOf("s"))
 
//slice
let texto3 = "O Corinthians é melhor do mundo"
console.log(texto3.slice(16,22))
 
//CONCATENAÇÃO
 
let nome1 = "Cidade"
document.write("O melhor professor é o" + nome1)
document.write("<br>")
 
let nome2 = "FIAP"
document.write("A melhor faculdade é a"+nome2+"!!")
document.write("<br>")
*/
 
//ESTRTURA CONDICIONAL
 
//IF = SE
/*if (true){
    document.write("Verdadeiro")
}
 
document.write("<br>")
 
//If else
let valor = 20;
let valor1 = 10;
 
if(valor > valor1){
    document.write("Dez maior que sete")
}
else{
document.write("Não é maior")
}
document.write("<br>")

//if else encadeado
let idade = 10;
 
if(idade <=12){
    document.write("tu é KID")
}
else if (idade <=17){
    document.write("Tu é ADULTO")
}
else if (idade <=40){
    document.write("Tu é MEIA IDADE")
}
*/


/*
//CHECKPOINT EXERCÍCIO 1
//Indefinido
let nome;
console.log(nome)
 
// Vazia
let disciplina = null;
console.log(disciplina)
 
//com valor
let aluno = "Zezinho";
console.log(aluno)
*/
/*
//CHECKPOINT EXERCÍCIO 2
    //O != significa diferente
   // Ex
   let num1 = 10
   let num2 = 5
   if(num1 != num2){
    document.write("É diferente")
   }
//o == significa igual

let num1 = 10
   let num2 = 10
   if(num1 != num2){
    document.write("É diferente")
   }
//o >= significa maior ou igual

let num1 = 10
   let num2 = 1
   if(num1 >= num2){
    document.write("Maior ou igual")
   }
*/

/*
//CHECKPOINT EXERCÍCIO 3
let altura = prompt("Por favor insira a sua idade:");
let peso = prompt("Por favor seu peso:");

IMC = peso/(altura*altura);

if (IMC < 18.5 ){
    document.write("Você está abaixo do peso ")
}
else if (IMC >= 18.5 && IMC <= 24.9 ){
    document.write("Você está no peso ideal ")
}

else if (IMC >= 24.9){
    document.write("Você está acima do peso " )
}
*/




//CHECKPOINT EXERCÍCIO 4

/*
let idade = prompt("Por favor insira a sua idade:");

if (idade <= 12 ){
    document.write("Você é uma criança")
}

else if( idade>=13 && idade <= 18 ){
    document.write("Você é um adolescente")

}

else if( idade>=19 && idade<=60 ){
    document.write("Você é um adulto")

}
else if( idade>60   ){
    document.write("Você é um idoso")
}
*/


//CHECKPOINT EXERCÍCIO 5
/*
let nome = prompt("Por favor insira o seu nome:");
let senha = prompt("Por favor insira a sua senha:");

if( nome == 'admin'  && senha == '1234'  ){

    document.write("O login foi realizado com sucesso")

}
else{
    document.write("Houve falha na autenticação do login")
}
*/
/*
// Exercicio 6
NOTA1=parseFloat(prompt("insira a nota 1")) //Solicitando ao usuario o valor da nota 1
NOTA2=parseFloat(prompt("insira a nota 2")) //Solicitando ao usuario o valor da nota 2
NOTA3=parseFloat(prompt("insira a nota 3")) //Solicitando ao usuario o valor da nota 3
NOTA4=parseFloat(prompt("insira a nota 4")) //Solicitando ao usuario o valor da nota 4
NOTA5=parseFloat(prompt("insira a nota 5")) //Solicitando ao usuario o valor da nota 5
NOTA6=parseFloat(prompt("insira a nota 6")) //Solicitando ao usuario o valor da nota 6
NOTA7=parseFloat(prompt("insira a nota 7")) //Solicitando ao usuario o valor da nota 7

MEDIA=(NOTA1 + NOTA2 + NOTA3 + NOTA4 + NOTA5 + NOTA6 + NOTA7)/7 // Realizando calculo da media do aluno

if (MEDIA < 6){
    document.write("Aluno reprovado, sua nota foi:" + MEDIA + "<br>");
} // Se a nota do aluno for menor que 6 o mesmo está reprovado
else {
    document.write("Aluno aprovado, sua nota foi:" + MEDIA + "<br>");
}// Se a nota do aluno não for menor que 6 o mesmo está aprovado
*/

/*
// Exercicio 7
var nome = prompt("Por favor, insira seu nome:"); // Solicitando nome do usuario
var idade = prompt("Por favor, insira sua idade:"); // Solicitando idade do usuario
var curso = prompt("Por favor, insira seu curso:"); // Soliciando curso do usuario
var ano = prompt("Por favor, insira o ano que está cursando"); // Solicitando ano que o usuario está cursando

document.write("nome do aluno: " + nome + "<br>"); // printando nome do usuario
document.write("idade do aluno: " + idade + "<br>"); // printando idade do usuario
document.write("curso do aluno: " + curso + "<br>"); // printando curso do usuario
document.write("ano no qual o aluno está cursando: " + ano + "<br>");// printando  ano que o usuario está cursando
*/



//CHECKPOINT 8

/*
//1
let texto = " Tecnologia é um produto da ciência e da engenharia que envolve um conjunto de instrumentos, métodos e técnicas que visam a resolução de problemas.";
console.log(texto)
console.log(texto.indexOf("em"))

//2
console.log(texto.lastIndexOf("ia"))


//3
let texto3 = "Tecnologia é um produto da ciência e da engenharia que envolve um conjunto de instrumentos, métodos e técnicas que visam a resolução de problemas."
console.log(texto3.slice(27,34))

//4
console.log(texto3.slice(92,99))
*/

/*
//CHECKPOINT 9

let meu_programa = "987.654";
console.log(parseFloat(meu_programa))
*/


