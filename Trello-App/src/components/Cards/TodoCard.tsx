import React from 'react';
import { useDrop } from 'react-dnd';
import TaskItem from '../TaskItem';

type TodoCardProps = {
  tasks: { id: number; task: string; status: string }[];
  moveTask: (id: number, newStatus: string) => void;
};

const TodoCard: React.FC<TodoCardProps> = ({ tasks, moveTask }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'TASK',
    drop: (item: { id: number; status: string }) => {
      moveTask(item.id, 'todo');
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} className="flex-1 p-4 border rounded bg-gray-300" >
      <h2 className='text-lg font-semibold' >Todo</h2>
      <div className='mt-2'>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} moveTask={moveTask} />
      ))}
      </div>
    </div>
  );
};

export default TodoCard;