import { useEffect, useState } from "react";

export const Effect = () => {
    const [input, setInput] = useState('');
    const [tarefas, setTarefas] = useState([
        'Pagar a conta de luz',
        'Estudar React js'
    ]);
    useEffect(() => {
        const tarefasStorage = localStorage.getItem('@tarefa');
        
        if(tarefasStorage){
            setTarefas(JSON.parse(tarefasStorage));
        }
     },[]);
 

    useEffect(() => {
       localStorage.setItem('@tarefa', JSON.stringify(tarefas));
    },[tarefas]);

    const handleRegister = (e) => {
        e.preventDefault();

        setTarefas([...tarefas, input]);
        setInput('');
    }

    return(
        <>
        <h1>Cadastrando usuário</h1>
            <form onSubmit={handleRegister}>
                <label htmlFor="nome">
                    Nome da tarefa:
                </label>
                <br />
                <input 
                placeholder="Digite uma tarefa" 
                type="text" 
                name="nome"
                value={input}
                onChange={ (e) => setInput(e.target.value)}
                />

                <br />
                <input type="submit" value="Registrar" />
            </form>

            <br /><br />
            <div>
                <ul>
                {tarefas.map(tarefa => (
                    <li key={tarefa}>{tarefa}</li>
                ))}
                </ul>
            </div>

        </>
    )
}