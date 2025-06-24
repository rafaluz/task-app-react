import { useState } from "react";

function AddTask({ onTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        type="text"
        placeholder="Digite o texto da tarefa"
        className="border border-slate-400 outline-slate-500 px-4 py-2 rounded-md"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <textarea
        rows={5}
        placeholder="Digite a descrição da tarefa"
        className="border border-slate-400 outline-slate-500 px-4 py-2 rounded-md"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          // verificar se o title e description estão preenchidos
          if (!title.trim() || !description.trim()) {
            return alert("Preencha o Titulo e a Descrição da tarefa");
          }
          onTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-400 hover:bg-slate-500 text-white p-2 rounded-md"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
