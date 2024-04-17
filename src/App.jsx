import { useState } from "react";
import { Nome } from "./components/Nome";

const App =() => {
  const [aluno, setAluno] = useState("Ronald");

  function handleChangeName(nome){
    setAluno(nome);
  }

  return (
    <>
      <h1>Bem vindo ao meu projeto</h1>
      <br />
      <h2>Olá: {aluno}</h2>
      <br />
      <button onClick={() => handleChangeName('Lucas')}>
        Mudar nome
      </button>
      <br />
      <Nome aluno="Everton"/>
      <br />
      <Nome aluno="David"/>
    </>
  )
}

export default App;
