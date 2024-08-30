//pegando os dados utilizando props
const Aluno=(props)=>{
    return(
        <>
        <p>Nome do Aluno é:{props.nome}</p>
        <p>Email do Aluno é:{props.email}</p>
        </>
    )
}
export default Aluno