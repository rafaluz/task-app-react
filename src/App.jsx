import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import "./App.css";
import { useEffect, useState } from "react";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      // PRECISO ATUALIZAR ESSA TAREFA
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      // NÃO PRECISO ATUALIZAR ESSA TAREFA
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-900 flex justify-center p-6">
      {/* <div className="w-[500px] space-y-4"> */}
      <div className="container mx-auto md:px-4 space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center my-11">
          Gerenciador de Tarefas
        </h1>
        {/* 
          - Lembrete: Responsividade com flex
          divpai: flex flex-col md:flex-row gap-4 
            div1: w-full md:w-1/3
            div2: w-full md:w-2/3
          - Preferi utilizar o grid
        */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="col-span-2 md:col-span-1">
            <AddTask onTaskSubmit={onTaskSubmit} />
          </div>
          <div className="col-span-2">
            <Tasks
              tasks={tasks}
              onTaskClick={onTaskClick}
              onDeleteTaskClick={onDeleteTaskClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
