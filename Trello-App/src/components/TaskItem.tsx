import React from 'react';
import { useDrag } from 'react-dnd';

type TaskItemProps = {
  task: { id: number; task: string; status: string };
  moveTask?: (id: number, newStatus: string) => void;
};

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const [, drag] = useDrag({
    type: 'TASK',
    item: { id: task.id, status: task.status },
  });

  return (
    <div ref={drag} className="space-x-8 p-2 mb-2 bg-slate-500 text-white rounded shadow-md">
      {task.task}
    </div>
  );
};

export default TaskItem;
