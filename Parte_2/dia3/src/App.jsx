//importando o componente HelloWorld
import HelloWorld from "./components/HelloWorld"
import Aluno from "./components/Aluno"

function App() {
  

  return (
    <>
    {/*Chamando o componente HelloWorld*/}
      <HelloWorld/>
      {/*Chamando o componente Aluno*/}
      <Aluno nome="fiap" email="fiap@gmail.com" />   
       </>
  )
}

export default App
