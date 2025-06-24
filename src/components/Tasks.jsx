import { Check, ChevronRight, Trash2 } from "lucide-react";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-4">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 text-left w-full text-white p-2 rounded-md flex gap-1 ${
              task.isCompleted && "line-through bg-slate-500"
            }`}
          >
            {task.isCompleted && <Check />}
            {task.title}
          </button>
          <button className="bg-slate-400 text-white p-2 rounded-md">
            <ChevronRight />
          </button>
          <button
            onClick={() => onDeleteTaskClick(task.id)}
            className="bg-slate-400 text-white p-2 rounded-md"
          >
            <Trash2 />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
