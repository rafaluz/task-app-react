import { ChevronRight } from "lucide-react";

function Tasks(props) {
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-4">
          <button
            onClick={() => props.onTaskClick(task.id)}
            className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${task.isCompleted && 'line-through'}`}
          >
            {task.text} {task.isCompleted ? 'sim':'nao'}
          </button>
          <button className="bg-slate-400 text-white p-2 rounded-md">
            <ChevronRight />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
