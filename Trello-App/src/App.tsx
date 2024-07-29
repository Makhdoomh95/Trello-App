
import React from 'react';
import { Provider } from 'react-redux';
import store from './Store';
import TaskManager from './components/Task/TaskManager';

const App: React.FC = () => {
  return (

    <Provider store={store}>
      <div className="App">
        <TaskManager />
      </div>
    </Provider>
  );
};

export default App;
