import { useState } from "react";
// import { Nome } from "./components/Nome";
// import { Formulario } from "./components/Formulario";
import { Lista } from "./components/Lista";
import { Effect } from "./components/Effect";


const App =() => {
  const [aluno, setAluno] = useState("Ronald");

  function handleChangeName(nome){
    setAluno(nome);
  }

  return (
    <>
    <Effect />
    {/*<Lista /> */}
     {/* <h1>Bem vindo ao meu projeto</h1>
      <br />
      <h2>Olá: {aluno}</h2>
      <br />
      <button onClick={() => handleChangeName('Lucas')}>
        Mudar nome
      </button>
      <br />
      <Nome aluno="Everton"/>
      <br />
      <Nome aluno="David"/> */}

      {/**<Formulario/> */}
      
    </>
  )
}

export default App;
