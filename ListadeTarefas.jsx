import { useState } from 'react'

function ListadeTarefas() {
    const [tarefas, setTarefas] = useState([])
    const [novaTarefa, setNovaTarefa] = useState('')

    const adicionarTarefa = () => {
        if (novaTarefa.trim() !== '') {
            setTarefas([...tarefas, novaTarefa])
            setNovaTarefa('')
        }
    }

    const removerTarefa = (index) => {
        const novasTarefas = [...tarefas]
        novasTarefas.splice(index, 1)
        setTarefas(novasTarefas)
    }

    return (
        <>

        <h2>Lista De Tarefas</h2>

        <input type="text" value={novaTarefa} onChange={(e) => setNovaTarefa(e.target.value)} placeholder='Adicionar nova tarefa'/>
        <button onClick={adicionarTarefa}>Adicionar</button>
        <ul>
            {tarefas.map((tarefa, index) => (
                <li key={index}>
                    {tarefa}{''}
                    <button onClick={() => removerTarefa(index)}>Remover</button>
                </li>
            ))}
        </ul>

        </>
    )
}

export default ListadeTarefas