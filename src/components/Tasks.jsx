import { ChevronRightIcon } from "lucide-react";
import { TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  // Props é a função que transita informações entre componentes
  const navigate = useNavigate();

  function onSeeMoreClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);

    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="bg-white rounded-2xl p-6 flex flex-col gap-4 shadow-lg">
      <li
        className={`
        text-center font-semibold text-gray-800 flex flex-col items-center
        ${tasks.length == 0 ? `block` : `hidden`}
        `}
      >
        {/* Adicionar imagem e texto p/ quando não possuir tarefa */}
        {/* 1:53:33 */}
        {/* API'S E JSON PLACEHOLDER */}
        Nenhuma tarefa por aqui.
      </li>
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">

          <Button
            onClick={() => onTaskClick(task.id)}
            type="name"
            completed={task.isCompleted && "true"}
          >
            {task.title}
          </Button>

          <Button
            onClick={() => onSeeMoreClick(task)}
          >
            <ChevronRightIcon />
          </Button>

          <Button
            onClick={() => onDeleteTaskClick(task.id)}
          >
            <TrashIcon />
          </Button>
          
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
