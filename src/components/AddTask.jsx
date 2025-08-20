import { useState } from "react";
import Input from "./Input"

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <ul className="bg-white rounded-2xl p-6 flex flex-col gap-4 shadow-lg">
      <Input
        type="text"
        placeholder="Título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <Input
        type="text"
        placeholder="Descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      {/* 1:16:56 */}
      {/* Adicionando validações na criação de uma tarefa */}

      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Preencha os dois campos de texto.");
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="
          bg-indigo-500 text-white rounded-lg
          font-semibold text-xl
          px-6 py-5
          transition-colors hover:bg-indigo-600
        "
      >
        Adicionar tarefa
      </button>
    </ul>
  );
}

export default AddTask;
