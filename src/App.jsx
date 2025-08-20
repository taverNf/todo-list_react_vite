import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import Header from "./components/Header";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  // LOCAL STORAGE

  // useEffect atua como um eventListener de onchange
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // EXEMPLO DE USO DE API'S EXTERNAS P/ PEGAR AS TAREFAS

  useEffect(() => {
    const fetchTasks = async () => {
      // chama a API
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        { method: "GET" }
      );

      // pega os dados que ela retorna
      const data = await response.json();

      // armazena os dados no site
      setTasks(data);
    };

    // fetchTasks();
  }, []); // lista vazia ~= onLoad

  // LOCAL STORAGE

  // FUNÇÕES

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        // Inverte o valor do isCompleted
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });

    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title: title,
      description: description,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
    //       ...tasks repete tudo que já está dentro da lista
  }

  // FUNÇÕES

  return (
    <div
      className="
        w-full min-h-screen overflow-hidden
        flex justify-start items-center flex-col p-16
        font-[montserrat]
        bg-gradient-to-t from-indigo-500 to-indigo-100
      "
    >
      <div className="w-[500px] space-y-8">
        <Header>Gerenciador de tarefas</Header>

        {/* 42:27 */}
        {/* npm run dev */}
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />

        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
        {/* tasks={tasks} é uma prop */}
      </div>
    </div>
  );
}

export default App;
