
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
  id: number;
  task: string;
  status: string;
}

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state: TaskState, action: PayloadAction<{ task: string; status: string }>) {
      const newTask: Task = {
        id: Date.now(), 
        task: action.payload.task,
        status: action.payload.status,
      };
      state.tasks.push(newTask);
    },
    moveTask(state: TaskState, action: PayloadAction<{ id: number; newStatus: string }>) {
      const { id, newStatus } = action.payload;
      const task = state.tasks.find((task: Task) => task.id === id);
      if (task) {
        task.status = newStatus;
      }
    },
  },
});

export const { addTask, moveTask } = taskSlice.actions;
export default taskSlice.reducer;


// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface Task {
//   id: number;
//   task: string;
//   status: string;
// }

// interface TaskState {
//   tasks: Task[];
// }

// const initialState: TaskState = {
//   tasks: [],
// };

// const taskSlice = createSlice({
//   name: 'tasks',
//   initialState,
//   reducers: {
//     addTask(state, action: PayloadAction<{ task: string; status: string }>) {
//       const newTask: Task = {
//         id: Date.now(), // generate id here
//         task: action.payload.task,
//         status: action.payload.status,
//       };
//       state.tasks.push(newTask);
//     },
//     moveTask(state, action: PayloadAction<{ id: number; newStatus: string }>) {
//       const { id, newStatus } = action.payload;
//       const task = state.tasks.find((task) => task.id === id);
//       if (task) {
//         task.status = newStatus;
//       }
//     },
//   },
// });

// export const { addTask, moveTask } = taskSlice.actions;
// export default taskSlice.reducer;



