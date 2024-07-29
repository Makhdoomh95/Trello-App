import React from 'react';
import { useDrop } from 'react-dnd';
import TaskItem from '../TaskItem';

type DoingCardProps = {
  tasks: { id: number; task: string; status: string }[];
  moveTask: (id: number, newStatus: string) => void;
};

const DoingCard: React.FC<DoingCardProps> = ({ tasks, moveTask }) => {
  const [, drop] = useDrop({
    accept: 'TASK',
    drop: (item: { id: number; status: string }) => {
      if (item.status !== 'doing') {
        moveTask(item.id, 'doing');
      }
    },
  });

  return (
    <div ref={drop} className="flex-1 p-4 border rounded bg-gray-300">
      <h2 className="text-lg font-semibold">Doing</h2>
      <div className="mt-2">
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default DoingCard;
