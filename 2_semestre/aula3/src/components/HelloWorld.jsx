import Button from "./Button";


const HelloWorld=()=>{

    //declarando as variáveis
    let nome="Fiapz";

    //criando a função clique
    // function clique(){
    //     alert("Olá desenvolvedor")
    // }

    function clique(){
        alert(`Ola Dev, ${nome}`)
    }

    return(
        <>
        <p>HelloWorld</p>
        <p>Olá Dev, {nome}</p>
        <button onClick={clique}>Clique Aqui</button>
        <h3>Botão do Componente</h3>
        <Button/>
        <Button/>
        <Button/>
        
        </>
    )
}

export default HelloWorld