import React from 'react';
import { useState } from 'react';
import TaskList from './components/TaskList.js';
import './App.css';

const TASKSLIST = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

const App = () => {
  const [complete, setComplete] = useState(TASKSLIST);

  const completeTask = (id) => {
    setComplete(complete => complete.map(task => {
      if(task.id === id) {
        return{...task, isComplete: task.isComplete = !complete}
      } else {
        return task;
      }
    }));
  }
  const buttonClass = complete ? 'tasks__item__toggle--completed' : '';

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>{<TaskList tasks={TASKSLIST} onCompleteTask={completeTask}/>}</div>
      </main>
    </div>
  );
};

export default App;
