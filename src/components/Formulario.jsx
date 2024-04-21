import { useState } from "react";

export const Formulario = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [idade, setIdade] = useState('');
    const [user , setUser] = useState({});

    const handleRegister = (e) => {
        e.preventDefault();

        alert('Usuário registrado com sucesso!');
        setUser({
            nome: nome,
            idade:idade,
            email: email,
        })
    }

    return(
        <>
        <h1>Cadastrando usuário</h1>
            <form onSubmit={handleRegister}>
                <label htmlFor="nome">
                    Nome
                </label>
                <br />
                <input 
                placeholder="Digite seu nome" 
                type="text" 
                name="nome"
                value={nome}
                onChange={ (e) => setNome(e.target.value)}
                />

                <br />
                
                <label htmlFor="email">
                    Email
                </label>
                <br />
                <input 
                placeholder="Digite seu E-mail" 
                type="email" 
                name="email"
                value={email}
                onChange={ (e) => setEmail(e.target.value)}
                />
                
                <br />
                
                <label htmlFor="nome">
                    Nome
                </label>
                <br />
                <input 
                placeholder="Digite sua idade" 
                type="number" 
                name="idade"
                value={idade}
                onChange={ (e) => setIdade(e.target.value)}
                />

                <br />

                <input type="submit" value="Registrar" />
            </form>

            <br /><br />
            <div>
                <span>Bem vindo: {user.nome}</span><br />
                <span>Idade: {user.idade}</span><br />
                <span>Email: {user.email}</span><br />
            </div>

        </>
    )
}