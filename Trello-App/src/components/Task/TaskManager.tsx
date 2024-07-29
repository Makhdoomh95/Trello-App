import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DropdownInput from '../DropdownInput';
import TodoCard from '../Cards/TodoCard';
import DoingCard from '../Cards/DoingCard';
import DoneCard from '../Cards/DoneCard';
import { RootState } from '../../Store';
import { addTask, moveTask } from '../../features/task/TaskSlice';

const TaskManager: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleAddTask = (task: string, status: string) => {
    dispatch(addTask({ task, status }));
  };

  const handleMoveTask = (id: number, newStatus: string) => {
    dispatch(moveTask({ id, newStatus }));
  };

  const getStatusTasks = (status: string) => tasks.filter((task: any) => task.status === status);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-4">
        <DropdownInput onAddTask ={handleAddTask} />
        <div className="space-x-20 mt-40 flex justify-between">
          <TodoCard tasks={getStatusTasks('todo')} moveTask={handleMoveTask} />
          <DoingCard tasks={getStatusTasks('doing')} moveTask={handleMoveTask} />
          <DoneCard tasks={getStatusTasks('done')} moveTask={handleMoveTask} />
        </div>
      </div>
    </DndProvider>
  );
};

export default TaskManager;

// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
// import DropdownInput from '../DropdownInput';
// import TodoCard from '../Cards/TodoCard';
// import DoingCard from '../Cards/DoingCard';
// import DoneCard from '../Cards/DoneCard';
// import { RootState } from '../../Store';
// import { addTask, moveTask } from '../../features/task/TaskSlice';

// const TaskManager: React.FC = () => {
//   const tasks = useSelector((state: RootState) => state.tasks.tasks);
//   const dispatch = useDispatch();

//   const handleAddTask = (task: string, status: string) => {
//     dispatch(addTask({ task, status }));
//   };

//   const handleMoveTask = (id: number, newStatus: string) => {
//     dispatch(moveTask({ id, newStatus }));
//   };

//   const getStatusTasks = (status: string) => tasks.filter((task) => task.status === status);

//   return (
//     <DndProvider backend={HTML5Backend}>
//       <div className="p-4">
//         <DropdownInput onAddTask={handleAddTask} />
//         <div className="space-x-20 mt-40 flex justify-between">
//           <TodoCard tasks={getStatusTasks('todo')} moveTask={handleMoveTask} />
//           <DoingCard tasks={getStatusTasks('doing')} moveTask={handleMoveTask} />
//           <DoneCard tasks={getStatusTasks('done')} moveTask={handleMoveTask} />
//         </div>
//       </div>
//     </DndProvider>
//   );
// };

// export default TaskManager;
