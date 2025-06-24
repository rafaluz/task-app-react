function AddTask() {
    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <input type="text" placeholder="Digite o texto da tarefa" className="border border-slate-400 outline-slate-500 px-4 py-2 rounded-md" />
            <input type="text" placeholder="Digite a descrição da tarefa" className="border border-slate-400 outline-slate-500 px-4 py-2 rounded-md" />
            <button className="bg-slate-400 text-white p-2 rounded-md">Adicionar</button>
        </div>
    )
}

export default AddTask;