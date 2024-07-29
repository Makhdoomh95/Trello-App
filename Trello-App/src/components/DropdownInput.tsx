import logo from '../images/trello-logo.svg'
import React from 'react';

interface DropdownInputProps {
  onAddTask: (task: string, status: string) => void;
}

const DropdownInput: React.FC<DropdownInputProps> = ({ onAddTask }) => {
  const [task, setTask] = React.useState('');
  const [status, setStatus] = React.useState('todo');

  const handleAddTask = () => {
    if (task.trim()) {
      onAddTask(task, status);
      setTask('');
    }
  };

  return (
    

    <div className="text-center">
      <div className='flex items-center space-x-4 absolute top-4 left-4' >
      <img 
          src={logo} 
          alt="Logo" 
          className="w-60 h-14 object-cover"
        />
      </div>
      <h1 className="mt-8 tracking-widest text-6xl font-bold mb-6">Trello App</h1> 
      <div className="mt-40 flex items-center justify-center space-x-2">
        <input
          className="flex-grow p-4 border rounded bg-slate-500 text-white"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
        />
        <select
          className="p-4 border rounded font-semibold"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="todo">Todo</option>
          <option value="doing">Doing</option>
          <option value="done">Done</option>
        </select>
        <button
          className="p-4 bg-blue-500 text-white rounded"
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default DropdownInput;

