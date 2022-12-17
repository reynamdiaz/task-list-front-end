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
  const [tasks, setTasks] = useState(TASKSLIST);
  // const [tasks, setComplete] = useState(TASKSLIST);
  console.log('tasklist:', tasks);

  console.log(tasks);
  const completeTask = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        console.log('id:', id, 'task', task);
        if (task.id === id) {
          console.log('isComplete', task.isComplete);
          return { ...task, isComplete: !task.isComplete };
        } else {
          return task;
        }
      })
    );
  };

// update tasks, leverage the state
  const deleteTask = id => {
    console.log('in delete!');
    console.log('deletable task');
    // fix functionality! wrap next three lines in 
    let updatedTasks = tasks.filter(task => task.id !== id);
    console.log(updatedTasks);
    setTasks(updatedTasks); 
    };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>{<TaskList 
                  tasks={tasks} 
                  onCompleteTask={completeTask} 
                  onDeleteTask={deleteTask}
                  />}</div>
      </main>
    </div>
  );
};

export default App;
