const Button=()=>{

    //criando a função HandleClick
    const handleClick =()=>{
        alert("Você clicou em um botão componente")
    }

    return(
        <>
        <button onClick={handleClick}>Btn Componente</button>
        </>
    )
}
export default Button