// import { configureStore } from '@reduxjs/toolkit';
// import taskReducer from './features/task/TaskSlice';  

// const store = configureStore({
//   reducer: {
//     tasks: taskReducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export default store;
// store.ts
import { configureStore } from '@reduxjs/toolkit';
import taskReducer, { TaskState } from './features/task/TaskSlice';

const store = configureStore({
    reducer: {
        tasks: taskReducer,
    },
});

export type RootState = {
    tasks: TaskState;
};

export default store;
