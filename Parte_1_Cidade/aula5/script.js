function mudar(){
    //declarando a variável
    let novo = document.getElementById("idNome").value ;
    document.getElementById("titulo");
    document.getElementById("titulo").innerHTML = novo;
}


function Calcular(){
    //declarando variáveis
    //parseFloat converte texto para Float
    let numero1 = parseFloat(document.getElementById('num1').value);
    let numero2 = parseFloat(document.getElementById('num2').value);

    //Operação
    document.getElementById("resultado").innerHTML = numero1 * numero2;

}
